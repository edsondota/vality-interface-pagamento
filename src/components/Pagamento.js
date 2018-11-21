import React, { Component } from 'react';
import Header from './Pagamento/Header';
import Rodape from './Pagamento/Rodape';
import Titulo from './Pagamento/Titulo';
import Formulario from './Pagamento/Formulario';
import BotaoLogin from './Pagamento/BotaoLogin';

class Pagamento extends Component {
  render () {
    return (
      <div className="pagamento row mt-3">
        <div className="col-md-6 offset-md-3">
          <Header />
          <div className="row mt-2">
            <div className="col p-3 bg-light">
              <div className="row pagamento__conteudo">
                <div className="col">
                  <div className="pagamento__conteudo__titulo text-center bg-white p-2">
                    <Titulo />
                    <Formulario />
                    <BotaoLogin />
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
