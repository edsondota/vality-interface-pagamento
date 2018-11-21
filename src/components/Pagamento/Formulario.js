import React, { Component } from 'react';
import CampoTexto from './Formulario/CampoTexto';
import CampoSelect from './Formulario/CampoSelect';

class Formulario extends Component {
  render() {
    return (
      <div className="row">
        <div className="col">
          <form>
            <CampoTexto Id="nome" Nome="Nome" Tipo="text" />
            <CampoTexto Id="cpf" Nome="CPF" Tipo="text" />
            <CampoTexto Id="email" Nome="E-mail" Tipo="email" />
            <CampoTexto Id="celular" Nome="Celular" Tipo="tel" />
            <CampoSelect Id="renda" Nome="Qual sua renda mensal?" />
          </form>
        </div>
      </div>
    );
  }
}

export default Formulario;
