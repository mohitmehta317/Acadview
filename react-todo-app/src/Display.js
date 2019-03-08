// We will have to import the react and components props
import React, { Component } from 'react';

class Display extends Component{
  render(){
    console.log(this.props);
    // const { name, age, birthMonth } = this.props;  // this destructing concept

    /*
      displayInfos is an array and we want to cycle through that array to display it into the DOM.
    */
    const { todos } = this.props; // this is similar to const displayInfos = this.props.displayInfos

    const displayList= todos.map( info => {

      // Each info that is returned here should have unique key which react can update if that particular state is changed.
      // we give it a key
      return (
        <div className='display-info' key={info.id}>
          <h5>{ info.todo }</h5>
        </div>
      )
    });
    return(
      <div className='InfoList'>
        { displayList }
      </div>
    )
  }
}

export default Display;
