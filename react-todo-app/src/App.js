import React, { Component } from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';
class App extends Component {
  state = {
    todos: [
      {id: 1, item: 'Play badminton'},
      {id: 2, item: 'Evaluate Assignments'}
    ]

  }

  addTodo = (item) => {
    console.log(item);
    item.id = Math.random();
    console.log(item.id);
    let todos = [...this.state.todos, item];
    this.setState({
      todos: todos
    })
  }
  componentDidMount(){
    console.log('Component Mounted')
  }
  
  deleteTodo=(id) => {
    //console.log(id);
    let todos = this.state.todos.filter( todo => {
      return todo.id !== id
    })
    this.setState({
      todos: todos
    })
  }
  render() {
    return (
      <div className="App container">
        <h3 className="center purple-text">My TODO</h3>
        <Todo todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
