import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import './App.scss';
import Pagamento from './components/Pagamento';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Pagamento />
      </div>
    );
  }
}

export default App;
