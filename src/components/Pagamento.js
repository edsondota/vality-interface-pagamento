import React, { Component } from 'react';
import Header from './Pagamento/Header';

class Pagamento extends Component {
  render () {
    return (
      <div className="pagamento row mt-3">
        <div className="col-6 offset-3">
          <Header />
        </div>
      </div>
    );
  }
}

export default Pagamento;
