import React, { Component } from "react";

export default class ContactEditor extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.name, this.state.number);

    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Имя
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Номер
          <input
            type="text"
            name="number"
            value={number}
            onChange={this.handleChange}
          />
        </label>

        <button type="submit">Создать</button>
      </form>
    );
  }
}
