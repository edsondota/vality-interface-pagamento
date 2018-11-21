import React, { Component } from 'react';
import Cart from './Header/Cart.js';

import logo from './boleto-flex.jpeg';

class Header extends Component {
  render() {
    return (
      <div className="row pagamento__header">
        <div className="col">
          <img src={logo} className="img-fluid" />
        </div>
        <div className="col align-self-center">
          <Cart />
        </div>
      </div>
    );
  }
}

export default Header;
