import React, { Component } from "react";
import ContactList from "./components/contact-list";
import ContactEditor from "./components/contact-editor";
import api from "./services/api";
import "./App.css";

export default class App extends Component {
  state = {
    contacts: [],
  };

  componentDidMount() {
    api
      .fetchContacts()
      .then((contacts) => this.setState({ contacts }))
      .catch((error) => console.log(error));
  }

  addContact = (name, number) => {
    api
      .createContact(name, number)
      .then((contact) =>
        this.setState((state) => ({ contacts: [contact, ...state.contacts] }))
      )
      .catch((error) => console.log(error));
  };

  removeContact = (id) => {
    api.deleteContact(id).then(() =>
      this.setState((state) => ({
        contacts: state.contacts.filter((c) => c.id !== id),
      }))
    );
  };

  render() {
    return (
      <div className="App">
        <ContactEditor onSubmit={this.addContact} />
        <ContactList
          contacts={this.state.contacts}
          onRemoveContact={this.removeContact}
        />
      </div>
    );
  }
}
