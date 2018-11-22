import React, { Component } from 'react';
import './CarrinhoDetalhes.scss';

class CarrinhoDetalhes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="carrinho-detalhes p-2">
        <div className="row">
          <div className="col">
            <h6>
              VALITY - LOJA DEMO
              <span onClick={this.props.onClick} className="float-right mr-2">X</span>
            </h6>
          </div>
        </div>
        <div className="row p-2">
          <div className="col-7">
            Notebook
          </div>
          <div className="col-5 text-right">
            R$ 1.065,30
          </div>
        </div>
        <div className="row p-2">
          <div className="col">
            ...<a href="#">Mais</a>
          </div>
        </div>
        <div className="divider w-100 border-top" />
        <div className="row px-2 mt-2">
          <div className="col">Frete</div>
          <div className="col text-right">14,70</div>
        </div>
        <div className="row px-2">
          <div className="col"><strong>Frete</strong></div>
          <div className="col text-right"><strong>R$ 1080,00</strong></div>
        </div>
      </div>
    );
  }
}

export default CarrinhoDetalhes;
