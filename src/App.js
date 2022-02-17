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
      // nameOfBeast: 'unknown name',
      objBeast: {},
      name: ''
    }
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false      
    })
  }

  handleShowModal = (beastObj) => {
  // handleShowModal = (beastName) => {
    this.setState({
      showModal: true,
      // nameOfBeast: beastName,
      objBeast: beastObj
    })
  }

  handleName = (event) => {
    this.setState({
      name: event.target.value
    }
    );
  }


  render() {
    // console.log('works');
    return (
      <>
        <h1>In-FORM-Ed {this.state.name}</h1>
        <form>
          <fieldset>
            <legend>Deep Ponderings</legend>
            <label>name
              <input type="text" onInput={this.handleName}/>
            </label>
          </fieldset>
        </form>
        <Header />
        <SelectedBeast
          showModal={this.state.showModal} 
          handleCloseModal={this.handleCloseModal}
          // nameOfBeast={this.state.nameOfBeast}
          objBeast={this.state.objBeast}
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