import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
class Home extends Component {
    state ={
        albums: [ ]
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/albums')
        .then( res => {
                    this.setState({
                albums: res.data.slice(0, 10)
            })
          })
    }

    render() {
        const { albums } = this.state;
        const albumList = albums.length ? (
            albums.map(album => {
                return (
                    <div className='card' key={album.id}>
                        <div className='card-content'>
                            <Link to = {'/' + album.id} >
                                <span className='card-title'>{album.title}</span>
                            </Link>
                            <ul>
                                <li>{album.title}</li>
                            </ul>
                              </div>
                    </div>
                )
            })
        ) : (
            <p className='center'> No albums yet </p>
        )

        return(
            <div className='center'>
                <h4 className='container'>3rd party API Data</h4>
                { albumList }
            </div>
        )
    }
}

export default Home;
