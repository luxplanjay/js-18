import React from "react";

const styles = {
  cell: {
    display: "inline-block",
    marginRight: 12,
  },
};

export default function ContactList({ contacts, onRemoveContact }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <span style={styles.cell}>Имя: {name}</span>
          <span style={styles.cell}>Телефон: {number}</span>
          <button type="button" onClick={() => onRemoveContact(id)}>
            Удалить
          </button>
          <button type="button">Редактировать</button>
        </li>
      ))}
    </ul>
  );
}
