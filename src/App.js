import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="display-1">
                <FontAwesomeIcon icon={faAngleRight} /> Hello World!
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
