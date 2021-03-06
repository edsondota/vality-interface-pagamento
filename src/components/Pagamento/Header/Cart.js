import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faAngleDown } from '@fortawesome/free-solid-svg-icons'

class Cart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="pagamento__header__cart text-right" onClick={this.props.onClick}>
        <FontAwesomeIcon icon={faShoppingCart } />
        <span className="mx-1">R$ 1.0800,00</span>
        <FontAwesomeIcon icon={faAngleDown} />
      </div>
    );
  }
}

export default Cart;
