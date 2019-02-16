import React from 'react';
import './style.css';

const Display = (props) => {
      const displayInfos = props.displayInfos;
      console.log('Inside Display Component --', displayInfos);
      const displayList = displayInfos.map( info => {
        if(info.age >= 15){
        return (
          <div className="container" key={info.id}>
              <div className="card-info">This is {info.name} and the age is {info.age} and he is a {info.profession}
              <input className="input-box" type="text" placeholder={info.name}/></div>
          </div>
        )}
        else{
          return null
        }
      });
      //console.log('Mapped Infos: ---',displayList)
        return (<div>{displayList}</div>
            // <div class="container">
            //     <div class="card-info">This is {this.props.name} and the age is {this.props.age} and he is a {this.props.profession}
            //     <input class="input-box" type="text" placeholder={this.props.name}/></div>
            // </div>
        )

}

export default Display;
