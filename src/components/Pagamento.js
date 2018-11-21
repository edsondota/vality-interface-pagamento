import React, { Component } from 'react';
import Header from './Pagamento/Header';
import Rodape from './Pagamento/Rodape';

class Pagamento extends Component {
  render () {
    return (
      <div className="pagamento row mt-3">
        <div className="col-md-6 offset-md-3">
          <Header />
          <div className="row">
            <div className="col p-3 bg-light">
              <div className="row pagamento__conteudo">
                <div className="col">
                  <div className="pagamento__conteudo__titulo text-center bg-white p-2">
                    <h4>
                      Parcele sua compra<br />
                      com o BoletoFlex
                    </h4>
                    <p className="lead">
                      <small>
                        Ganhe um limite de crédito instantâneo<br />
                        para concluir esta compra.
                      </small>
                    </p>
                  </div>
                </div>
              </div>
              <Rodape />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Pagamento;
