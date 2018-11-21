import React, { Component } from 'react';

class CampoTexto extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="form-group row">
        <label htmlFor={this.props.Id} className="col-3 text-left col-form-label">{this.props.Nome}</label>
        <div className="col-9">
          <input type={this.props.Tipo} className="form-control text-right border-0" id={this.props.Id} name={this.props.Id} />
        </div>
        <div className="border-top w-100 mx-3" />
      </div>
    );
  }
}

export default CampoTexto;
