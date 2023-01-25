import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Todos from './components/Todos';
import TodoForm from './components/TodoForm';
import { addTodo, completeTodo, deleteTodo } from './actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: ''
    };
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  // handleInputChange = event => {
  //   this.setState({ inputText: event.target.value });
  // }

  // addTodoChange = event => {
  //   console.log(this.state);
  //   event.preventDefault();
  //   this.props.addTodo(this.state.inputText);
  // }
  
  addTodoChange = event => {
    event.preventDefault();
    const newTodo = {
      id: this.props.todos.length + 1,
      value: this.state.inputText,
      completed: false
    }
    this.props.addTodo(newTodo)
    this.setState({inputText: '' });
  };

  completeTodoChange = index => {
    this.props.completeTodo(index)
  }

  deleteTodoChange = event => {
    console.log('clicked');
    event.preventDefault();
    this.props.deleteTodo();
  };

  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>
        <Todos 
          todos={this.props.todos} 
          completeTodo={this.completeTodoChange}
        />
        <TodoForm 
          inputText={this.state.inputText}
          handleInput={this.handleInputChange}
          addTodo={this.addTodoChange}
          deleteTodo={this.deleteTodoChange}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
}

export default connect(mapStateToProps, {addTodo, completeTodo, deleteTodo})(App);