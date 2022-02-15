import React from 'react';

class HornedBeast extends React.Component {
  render() {
    return (
      <article className="card">
        <header>
          <h2>{this.props.title}</h2>
        </header>
        <img 
          src={this.props.imageUrl} 
          alt={this.props.description}
          title={this.props.title} 
        />
        <p>{this.props.description}</p>
      </article>
    );
  }
}

export default HornedBeast;