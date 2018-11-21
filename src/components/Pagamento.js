import React, { Component } from 'react';
import Header from './Pagamento/Header';

class Pagamento extends Component {
  render () {
    return (
      <div className="pagamento row mt-3">
        <div className="col-md-6 offset-md-3">
          <Header />
        </div>
      </div>
    );
  }
}

export default Pagamento;
