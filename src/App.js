import React from 'react';
import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import hornedBeasts from './data.json';
import Modal from 'react-bootstrap/Modal';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false, //true temporarily only to confirm proof of life
      nameOfBeast: 'unknown name'
    }
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false      
    })
  }

  handleShowModal = (beastName) => {
    this.setState({
      showModal: true,
      nameOfBeast: beastName
    })
  }

  render() {
    // console.log('works');
    return (
      <>
        <Header />

        <Modal show={this.state.showModal} onHide={this.handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.nameOfBeast}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.state.nameOfBeast} is an important part of this community!
          </Modal.Body>
        </Modal>
        
        <Main 
          hornedBeasts={hornedBeasts} 
          handleShowModal={this.handleShowModal}
        />
        <Footer />
      </>
    );
  }
}

export default App;