import React from 'react';
import MenuItems from './MenuItems';
import './App.css';
import Hero from './Hero';
import TipCalculator from './TipCalculator';

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
      <TipCalculator />
    </div>
  );
}

export default App;
