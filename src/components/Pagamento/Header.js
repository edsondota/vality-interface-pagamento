import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import logo from './boleto-flex.jpeg';

class Header extends Component {
  render() {
    return (
      <div className="row pagamento__header">
        <div className="col">
          <a>
            <img src={logo} className="img-fluid" />
          </a>
        </div>
        <div className="col">
          <div className="btn-group">
            <button type="button" className="btn btn-link dropdown-toggle" data-toggle="dropdown">
              <FontAwesomeIcon icon={faShoppingCart } /> R$
            </button>
            <div className="dropdown-menu">
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
