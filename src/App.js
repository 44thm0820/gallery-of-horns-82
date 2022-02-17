import React from 'react';
import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import SelectedBeast from './SelectedBeast'
import hornedBeasts from './data.json';


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

        <SelectedBeast
          showModal={this.state.showModal} 
          handleCloseModal={this.handleCloseModal}
          nameOfBeast={this.state.nameOfBeast}
        />
        
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