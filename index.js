const path = require("path");
const express = require("express");
const app = express();
const http = require("http").Server(app);

// Вешаем сокет на http-сервер
const io = require("socket.io")(http);

// Раздаём статику
app.use(express.static(path.resolve(__dirname, "public")));

// Храним историю и пользователей
const chatHistory = [];
const users = {};

// Слушаем подключения
io.on("connection", (socket) => {
  console.log("К серверу подключился новый пользователь");

  socket.on("user/joinChat", (userName) => {
    console.log(`Пользователь ${userName} присоединился к чату`);
    users[socket.id] = userName;

    socket.emit(
      "user/joinChatSuccess",
      `${userName} - вы присоединились к чату`
    );

    socket.emit("user/connected", chatHistory);

    socket.broadcast.emit(
      "chat/userJoined",
      `${userName} присоединился к чату`
    );
  });

  socket.on("chat/newMessage", (message) => {
    console.log(`Получено сообщение: ${message}`);

    const entry = {
      author: users[socket.id],
      message,
      timestamp: Date.now(),
    };

    chatHistory.push(entry);
    io.emit("chat/newMessage", entry);
  });

  socket.on("disconnect", () => {
    console.log("Пользователь отключился от сервера");
  });
});

http.listen(4040, () => console.log("Сервер работает на порте 4040"));
