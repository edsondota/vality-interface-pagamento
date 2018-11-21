import React, { Component } from 'react';

class CampoSelect extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="form-group text-left">
        <label htmlFor={this.props.Id}>{this.props.Nome}</label>
        <select
            className="form-control"
            id={this.props.Id}
            name={this.props.Id}>
        </select>
      </div>
    );
  }
}

export default CampoSelect;
