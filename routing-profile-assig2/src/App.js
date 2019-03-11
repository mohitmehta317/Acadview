import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import People from './Components/People';
import Album from './Components/Album';
class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/Info' component={People} />
                    <Route path='/:album_id' component={Album} />
                </Switch>

            </div>
        </BrowserRouter>
    );
  }
}

export default App;
