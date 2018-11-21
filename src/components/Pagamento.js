import React, { Component } from 'react';
import Header from './Pagamento/Header';

class Pagamento extends Component {
  render () {
    return (
      <div className="pagamento row mt-3">
        <div className="col-md-6 offset-md-3">
          <Header />
          <div className="row mr-2 h-100">
            <div className="col p-3 bg-light">
              <div className="row conteudo">
                <div className="col bg-transparent"></div>
              </div>
              <div className="row rodape">
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Pagamento;
