const socket = io("ws://localhost:4040");

const refs = {
  messageEditor: document.querySelector("#message-editor"),
  feed: document.querySelector("#message-feed"),
};

const userName = prompt("Ты кто?") || "Аноним";

socket.emit("user/joinChat", userName);

socket.on("user/joinChatSuccess", (message) => {
  console.log(message);
});

socket.on("chat/userJoined", (message) => {
  console.log(message);
});

socket.on("chat/newMessage", appendMessageToFeed);

socket.on("user/connected", (history) => {
  const markup = history
    .map(({ author, message, timestamp }) => {
      const { hours, minutes } = getTime(timestamp);

      return `<li>
        <b>${author}</b> ${hours}:${minutes}
        <p>${message}</p>
      </li>`;
    })
    .join("");

  refs.feed.insertAdjacentHTML("beforeend", markup);
});

refs.messageEditor.addEventListener("submit", onEditorSubmit);

function onEditorSubmit(event) {
  event.preventDefault();

  socket.emit("chat/newMessage", event.currentTarget.elements.message.value);
  event.currentTarget.elements.message.value = "";
}

function appendMessageToFeed({ author, message, timestamp }) {
  const { hours, minutes } = getTime(timestamp);

  const markup = `
  <li>
    <b>${author}</b> ${hours}:${minutes}
    <p>${message}</p>
  </li>`;

  refs.feed.insertAdjacentHTML("beforeend", markup);
  refs.feed.scrollTop = refs.feed.scrollHeight;
}

function getTime(timestamp) {
  const time = new Date(timestamp);
  const hours = time.getHours();
  const minutes = time.getMinutes();

  return { hours, minutes };
}
