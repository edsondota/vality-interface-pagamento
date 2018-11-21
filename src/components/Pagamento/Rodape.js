import React, { Component } from 'react';

class Rodape extends Component {
  render() {
    return (
      <div className="row mt-1 pagamento__rodape">
        <div className="col">
          <a href="#">
            <small>Retornar à Loja Demo</small>
          </a>
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
