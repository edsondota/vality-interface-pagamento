import React, { Component } from 'react';
import Cart from './Header/Cart.js';
import CarrinhoDetalhes from './Header/CarrinhoDetalhes';
import { Link } from 'react-router-dom';

import logo from './boleto-flex.jpeg';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exibirCarrinhoDetalhes: false
    }

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({ exibirCarrinhoDetalhes: !this.state.exibirCarrinhoDetalhes });
  }

  render() {
    return (
      <div className="row pagamento__header">
        <div className="col">
          <Link to="/">
            <img src={logo} className="img-fluid" />
          </Link>
        </div>
        <div className="col align-self-center">
          <Cart onClick={this.onClick} />
        </div>
        { this.state.exibirCarrinhoDetalhes
            ? <CarrinhoDetalhes onClick={this.onClick} />
            : null
        }
      </div>
    );
  }
}

export default Header;
