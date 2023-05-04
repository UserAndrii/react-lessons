import React, { Component } from 'react';

class ToDoEditor extends Component {
  state = {
    message: '',
  };

  handleChange = e => {
    this.setState({ message: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.message);
    this.setState({ message: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.message}
          onChange={this.handleChange}
          style={{ marginRight: 10, marginBottom: 10 }}
        ></input>
        <button type="submit ">Додати справу</button>
      </form>
    );
  }
}

export default ToDoEditor;
