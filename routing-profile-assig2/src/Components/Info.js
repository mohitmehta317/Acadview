import React from 'react';
const Info = (props) => {
    const { infos, deleteInfo } = props;
    const infoList = infos.map( info => {
      return (
        <div className='card'>
            <div className='card-content ' key={info.id}>
              <div> Name: { info.name } </div>
              <div> Birthday: { info.birth } </div>
              <div> About Me: { info.aboutme } </div><br/>
               <button onClick={()=>{deleteInfo(info.id)}}> Delete </button>
            </div>
        </div>
      )
    });
    return(
      <div className='infos'>
        { infoList }
      </div>
    )
  }
export default Info;
