import React from 'react';
import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import hornedBeasts from './data.json';


class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Main hornedBeasts={hornedBeasts} />
        <Footer />
      </>
    );
  }
}

export default App;