import React from 'react';

class HornedBeast extends React.Component {
  // THIS is how we set up state in a component (reference 1:49 in Day2 video)
  constructor(props) {
    super(props);
    this.state ={
      likes: 0,
    }
  }

  handleLikes = () => {
    this.setState({
      likes: this.state.likes + 1,
    })
  }

  render() {
    return (
      <article className="card">
        <header>
          <h2>{this.props.title}</h2>
        </header>
        <img onClick={this.handleLikes}
          src={this.props.imageUrl} 
          alt={this.props.description}
          title={this.props.title} 
        />
        <p>💜: {this.state.likes}</p>
        <p>{this.props.description}</p>
      </article>
    );
  }
}

export default HornedBeast;