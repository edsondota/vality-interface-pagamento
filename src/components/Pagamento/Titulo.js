import React, { Component } from 'react';

class Titulo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <div className="col">
          <h4 dangerouslySetInnerHTML={{ __html: this.props.titulo }} />
          <p className="lead">
            <small dangerouslySetInnerHTML={{ __html: this.props.subtitulo }} />
          </p>
        </div>
      </div>
    );
  }
}

export default Titulo
