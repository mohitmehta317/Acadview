import React, { Component } from 'react';
class AddInfo extends Component {
  state= {
      name: null,
      birth: null,
      aboutme: null
  }
  handleChange= (e) => {
    this.setState({
     [e.target.id]: e.target.value
    }
    )
  }
  handleSubmit= (e) => {
    e.preventDefault();
    console.log('Inside AddInfo Component', this.state);
    this.props.addInfo(this.state);
      this.setState({
          item: ''
      })
  }
  render(){
    return(
      <div className='AddInfo card'>
        <div className='card-content'>
        <form onSubmit={this.handleSubmit}>
          <label> Name </label>
          <input type='text' id='name' onChange={this.handleChange} /><br/>
          <label> Birthday </label>
          <input type='text' id='birth' onChange={this.handleChange} /><br/>
          <label> About Me </label><br/>
          <input type='text' id='aboutme' onChange={this.handleChange}/><br/><br/>
          <div className='center'>
          <button> Submit </button>
          </div>
        </form>
        </div>
      </div>
    )
  }
}
export default AddInfo;
