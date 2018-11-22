import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

class BotaoLogin extends Component {
  render() {
    return (
      <div className="row">
        <div className="col">
          <Link to="/parcelas" className="btn btn-primary btn-block text-center py-2 rounded-0">
            <FontAwesomeIcon icon={faFacebookSquare} />
            <span className="ml-1">Continuar com Facebook</span>
          </Link>
          <p className="mt-1">
            <a className="text-muted" href="#">
              <small>
                <FontAwesomeIcon icon={faInfoCircle} />
                <span className="ml-1">Por que continuar com o Facebook?</span>
              </small>
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default BotaoLogin;
