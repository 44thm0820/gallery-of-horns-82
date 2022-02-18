import React from 'react';
import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import SelectedBeast from './SelectedBeast'
import hornedBeasts from './data.json';
import { Form, Button, ListGroup, Container } from 'react-bootstrap';

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

  handleSubmit = event => {
    event.preventDefault()

    let name = event.target.name.value;
    let word = event.target.word.value;
    let selected = event.target.selected.value;

    console.log(name, word, selected);
    
    this.setState({
      submitName: name,
      submitWord: word,
      submitSelected: selected
    });
   
    console.log('logging this.state inside this.handleSubmit', this.state);

  }

  render() {
    console.log('logging this.state outside this.handleSubmit', this.state);
    let listItems = this.state.nums.map((listItem, idx) => (
      <ListGroup.Item key={idx}>{listItem}</ListGroup.Item>
      // <li key={idx}>{listItem}</li>
    ));
    return (
      <>
        <h1>In-FORM-Ed {this.state.name}</h1>
        <h3>{this.state.word !== '' ? this.state.word + ' is the word': ''}</h3>
{/* 
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Deep Ponderings</legend>
            <label>name
              <input name="name" type="text" onInput={this.handleName}/>
            </label>
            <label htmlFor="word">Word</label>
              <input name="word" id="word" type="text" onChange={this.handleWord}/>
            <select name="selected" onChange={this.handleSelect}>
              <option value="all">All</option>
              <option value="even">Even</option>
              <option value="odd">Odd</option>
            </select>
            <button>Submit</button>
          </fieldset>
        </form> */}
        <Container>
          <Form onSubmit={this.handleSubmit} style={{width: 'max-content', margin: 'auto'}}>
              {/* <Form.Group controlId='name'>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" onInput={this.handleName}/>
              </Form.Group>
              <Form.Group controlId='word'>
                <Form.Label>Word</Form.Label>
                <Form.Control type="text" onChange={this.handleWord}/>
              </Form.Group> */}
              <Form.Group controlId='selected'>
                <Form.Select onChange={this.handleSelect}>
                  <option value="all">All</option>
                  <option value="even">Even</option>
                  <option value="odd">Odd</option>
                </Form.Select>
              </Form.Group>
              {/* <Button type="submit">Submit</Button> */}

          </Form>
        </Container>

        {/* <ul>
          {listItems}
        </ul> */}
        <Container>
          <ListGroup as="ul">
            {listItems}
          </ListGroup>
        </Container>
        <Container>
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

        </Container>
      </>
    );
  }
}

export default App;