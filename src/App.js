import React from 'react';
import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import SelectedBeast from './SelectedBeast'
import hornedBeasts from './data.json';
import { Form, ListGroup, Container } from 'react-bootstrap';

let nums = [1,2,3,100];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false, 
      objBeast: {},
      nums: nums,
      subsetBeasts: hornedBeasts
    }
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false      
    })
  }

  handleShowModal = (beastObj) => {
    this.setState({
      showModal: true,
      objBeast: beastObj
    })
  }


  handleSelect = (event) => {
    let selected = event.target.value;

    if(selected === 'one') {
      let newNums = nums.filter(num => num === 1);  
      this.setState({ nums: newNums });
      let newBeasts = hornedBeasts.filter(beast => beast.horns === 1);
      this.setState({ subsetBeasts: newBeasts});
    }
    if(selected === 'two') {
      let newNums = nums.filter(num => num === 2);  
      this.setState({ nums: newNums });
      let newBeasts = hornedBeasts.filter(beast => beast.horns === 2);
      this.setState({ subsetBeasts: newBeasts});
    }
    if(selected === 'three') {
      let newNums = nums.filter(num => num === 3);  
      this.setState({ nums: newNums });
      let newBeasts = hornedBeasts.filter(beast => beast.horns === 3);
      this.setState({ subsetBeasts: newBeasts});
    }
    if(selected === 'hundred') {
      let newNums = nums.filter(num => num === 100);  
      this.setState({ nums: newNums });
      let newBeasts = hornedBeasts.filter(beast => beast.horns === 100);
      this.setState({ subsetBeasts: newBeasts});
    }
    if(selected === 'all') {
      this.setState({ nums });
      this.setState({ subsetBeasts: hornedBeasts});
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    let selected = event.target.selected.value;
    console.log('selected is ', selected);    
    this.setState({
      submitSelected: selected
    });

  }

  render() {
    let listItems = this.state.nums.map((listItem, idx) => (
      <ListGroup.Item key={idx}>Including {listItem} Horned Beasts</ListGroup.Item>
    ));
    return (
      <>
        <Container>
          <Header />
          <Form onSubmit={this.handleSubmit} style={{width: 'max-content', margin: 'auto'}}>
              <Form.Group controlId='selected'>
                <Form.Select onChange={this.handleSelect}>
                  <option value="all">All</option>
                  <option value="one">One</option>
                  <option value="two">Two</option>
                  <option value="three">Three</option>
                  <option value="hundred">One Hundred</option>
                </Form.Select>
              </Form.Group>
          </Form>
          <ListGroup as="ul">
            {listItems}
          </ListGroup>
          <SelectedBeast
            showModal={this.state.showModal} 
            handleCloseModal={this.handleCloseModal}
            // nameOfBeast={this.state.nameOfBeast}
            objBeast={this.state.objBeast}
          />
          <Main 
            hornedBeasts={this.state.subsetBeasts} 
            // hornedBeasts={hornedBeasts} 
            handleShowModal={this.handleShowModal}
          />
          <Footer />
        </Container>
      </>
    );
  }
}

export default App;