import React from 'react';
import ColorChanger from '../HOC/ColorChanger';
const Contact = (props) => {

  console.log(props);

  return(
    <div>
      <div className='container center'>
        <h4>Contact Page</h4>
        <p> This my Contact page. </p>
      </div>
    </div>
  )
}

export default ColorChanger(Contact);
