import React from 'react';
import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import SelectedBeast from './SelectedBeast'
import hornedBeasts from './data.json';

let nums = [0,1,2,3,4,5,6,7,8,9];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false, //true temporarily only to confirm proof of life
      // nameOfBeast: 'unknown name',
      objBeast: {},
      name: '',
      word: '',
      nums: nums
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

  handleWord = (event) => {
    this.setState({
      word: event.target.value
    }
    );
  }

  handleSelect = (event) => {
    let selected = event.target.value;
    // console.log(event.target.value);

    if(selected === 'even') {
      let newNums = nums.filter(num => num % 2 === 0);  
      this.setState({ nums: newNums });
    }
    if(selected === 'odd') {
      let newNums = nums.filter(num => num % 2 === 1);  
      this.setState({ nums: newNums });
    }
    if(selected === 'all') {
      this.setState({ nums });
      // this.setState({ nums: nums }); //equivalent to above
    }
    
  }


  render() {
    // console.log('works');
    let listItems = this.state.nums.map((listItem, idx) => (
      <li key={idx}>{listItem}</li>
    ));
    return (
      <>
        <h1>In-FORM-Ed {this.state.name}</h1>
        <h3>{this.state.word !== '' ? this.state.word + ' is the word': ''}</h3>
        <form>
          <fieldset>
            <legend>Deep Ponderings</legend>
            <label>name
              <input type="text" onInput={this.handleName}/>
            </label>
            <label htmlFor="word">Word</label>
            <input id="word" type="text" onChange={this.handleWord}/>
            <select onChange={this.handleSelect}>
              <option value="all">All</option>
              <option value="even">Even</option>
              <option value="odd">Odd</option>
            </select>
          </fieldset>
        </form>
        <ul>
          {listItems}
        </ul>
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