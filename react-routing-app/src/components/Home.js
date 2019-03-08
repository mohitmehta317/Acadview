import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import abc from '../abc.png';
class Home extends Component {
  state = {
    posts: [ ]
  }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        console.log(res);
        this.setState({
          posts: res.data.slice(0, 20)
        })
      })
  }
  render(){
    const { posts } = this.state;
    const postList = posts.length ? (
      posts.map( post => {
        return (
          <div className='post card' key={post.id}>
           <img src={abc} alt='wild' />
            <div className='card-content'>
              {

              }
              <Link to={'/' + post.id}  >
                <span className='card-title'>{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ) : (<div className='center'>No posts yet</div>)

    return(
      <div>
        <div className='container center home'>
          <h4>Home Page</h4>
          { postList }
        </div>
      </div>
    )
  }
}

export default Home;
