import React from 'react';
import HornedBeast from './HornedBeast.js';
import './Main.css';

class Main extends React.Component {
  render() {
    let beasts = this.props.hornedBeasts.map((beast, index) => {
      return <HornedBeast 
        key={index}
        title={beast.title}
        imageUrl={beast.image_url}
        description={beast.description}
      />
    })
    return (
      <main className="cards">
        {beasts}
      </main>
    );
  }
}

export default Main;