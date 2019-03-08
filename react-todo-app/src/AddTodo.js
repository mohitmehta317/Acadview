
import React, { Component } from 'react';
import './AddTodo.css';

class AddTodo extends Component {

  state= {
      item: ''
      }
      handleChange = (e) =>
      {
        this.setState({
          item: e.target.value
        })
      }
      handleSubmit=(e) =>{
        e.preventDefault();
        this.props.addTodo(this.state)

        this.setState({
          item: ''
        })
      }
      render(){
        return(
        <form onSubmit={this.handleSubmit}>
          <label> Add todo</label>
          <input type="text" onChange={this.handleChange} value={this.state.item}/>
          </form>
        )
      }
    }

export default AddTodo;
