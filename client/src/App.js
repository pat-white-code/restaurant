import React from 'react';
import MenuItems from './MenuItems';
import './App.css';
import Hero from './Hero';

const styles = {
  home: {
    backgroundColor: 'black',
    padding: 20
  }
}

function App() {
  return (
    <div style={styles.home}>
      <MenuItems />
      <Hero />
    </div>
  );
}

export default App;
