import React, { Component } from 'react';
import Info from './Info';
import AddInfo from './AddInfo';
class People extends Component {
  state ={
      infos: [
      { name: 'Mohit Mehta', birth:'31 July 1999', aboutme:'I am a Photographer', id: 1 }
    ]
  }
  deleteInfo = (id)=>{
      let infos = this.state.infos.filter(info=>{
          return info.id!==id;
      })
      this.setState({
          infos
      })
  }
  addInfo = (info) => {
    info.id = Math.floor(Math.random() * 10);
    let infos = [...this.state.infos, info];
    this.setState({
      infos
    })
  }
  render(){
      return (
        <div className="App container">
          <h4 className="center">List of People</h4>
          <Info infos={this.state.infos} deleteInfo={this.deleteInfo}/>
          <AddInfo addInfo={this.addInfo} />
        </div>
      );
  }
}

export default People;
