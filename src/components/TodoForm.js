import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }

  handleChanges = (e) => {
    this.setState({
      ...this.state,
      input: e.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleAddItems(this.state.input);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChanges} type="text" name="item" />
        <button>Add ToDo Item</button>
      </form>
    );
  }
}

export default TodoForm;
