import React from 'react';
import Card from 'react-bootstrap/Card';
import './HornedBeast.css'

class HornedBeast extends React.Component {
  // THIS is how we set up state in a component (reference 1:49 in Day2 video)
  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
    }
  }

  handleLikes = () => {
    this.setState({
      likes: this.state.likes + 1,
    })
  }

  handleBeastClick = () => {
    this.handleLikes();
    this.props.handleShowModal(this.props.title);
  }

  render() {
    return (
      <Card
        style={{ width: '18rem' }} 
      >
        <Card.Body>
          <Card.Title>
            <h2>{this.props.title}</h2>
          </Card.Title>
          <Card.Img 
            onClick={this.handleBeastClick}
            src={this.props.imageUrl} 
            alt={this.props.description}
            title={this.props.title} >
          </Card.Img>
          <Card.Text>💜: {this.state.likes}</Card.Text>
          <Card.Text>{this.props.description}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default HornedBeast;