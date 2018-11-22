import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Rodape extends Component {
  render() {
    return (
      <div className="row mt-1 pagamento__rodape">
        <div className="col">
          <Link to="/">
            <small>Retornar à Loja Demo</small>
          </Link>
        </div>
        <div className="col text-right">
          <a href="#">
            <small>Ajuda</small>
          </a>
        </div>
      </div>
    );
  }
}

export default Rodape;
