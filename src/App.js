import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="row">
          <div class="col">
            <h1 class="display-1">
              <FontAwesomeIcon icon={faAngleRight} /> Hello World
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
