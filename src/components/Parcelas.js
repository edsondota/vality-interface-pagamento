import React, { Component } from 'react';
import Header from './Pagamento/Header';
import Rodape from './Pagamento/Rodape';
import Titulo from './Pagamento/Titulo';
import BotaoParcela from './Parcelas/BotaoParcela';
import { MemoryRouter } from 'react-router-dom'

class Parcelas extends Component {
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
                    <Titulo
                        titulo="Escolha a parcela que<br/>cabe no seu bolso"
                        subtitulo="Nós pagamos a loja à vista e você nos paga<br/>a prazo no boleto." />
                    <div className="parcelas pb-4">
                      <BotaoParcela
                        parcela="6x de R$ 235,80"
                        total="total a pagar: R$ 1.414,80" />
                      <BotaoParcela
                        parcela="9x de R$ 173,42"
                        total="total a pagar: R$ 1.560,78" />
                      <BotaoParcela
                        parcela="12x de R$ 139,47"
                        total="total a pagar: R$ 1.498,69" />
                    </div>
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

export default Parcelas;
