import React, { Component } from 'react';
import axios from 'axios';
class Album extends Component {
        state={
            album: [ ]
        }
        componentDidMount(){
            console.log(this.props);
            let id = this.props.match.params.album_id;
            axios.get('https://jsonplaceholder.typicode.com/albums/' + id).then(res =>{
             this.setState({
                 album: res.data
             })
            })
        }
    render() {
        const album = this.state.album ? (
            <div className='yellow album card'>
            <ul className='center card-title'>
                <li>{this.state.album.id}</li>
                <li>{this.state.album.title}</li>
            </ul>

            </div>
        ) : ( <p>Wait..</p> )

        return(
            <div className='container'>
                {album}
            </div>
        )
    }
}
export default Album;
