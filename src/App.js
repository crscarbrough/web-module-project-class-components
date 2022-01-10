import React from "react";
import ReactDOM from "react-dom";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./style.css";

const checkList = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false,
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false,
  },
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      checkList: checkList,
    };
  }

  handleClear = () => {
    this.setState({
      ...this.state,
      checkList: this.state.checkList.filter((item) => !item.completed),
    });
  };

  handleAddItems = (item) => {
    const newItem = {
      name: item,
      id: Date.now(),
      completed: false,
    };

    this.setState({
      ...this.state,
      checkList: [...this.state.checkList, newItem],
    });
  };

  handleToggle = (selected) => {
    this.setState({
      ...this.state,
      checkList: this.state.checkList.map((list) => {
        if (list.id === selected.id) {
          return {
            ...list,
            completed: !list.completed,
          };
        }
        return list;
      }),
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Things I have to do!</h1>
          <TodoForm handleAddItems={this.handleAddItems} />
        </div>
        <TodoList
          handleClear={this.handleClear}
          handleToggle={this.handleToggle}
          checkList={this.state.checkList}
        />
        <button onClick={this.handleClear}>Clear all done!</button>
      </div>
    );
  }
}

export default App;
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
