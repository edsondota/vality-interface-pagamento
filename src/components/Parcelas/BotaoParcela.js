import React, { Component } from 'react';
import './BotaoParcela.scss';

class BotaoParcela extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card card-body mx-2 rounded-0 text-left parcela mb-3">
        <div className="card-title text-info mb-0">{this.props.parcela}</div>
        <div className="cart-text">
          <small>{this.props.total}</small>
        </div>
      </div>
    );
  }
}

export default BotaoParcela;
