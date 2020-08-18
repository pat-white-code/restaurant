import React from 'react';
import MenuItems from './MenuItems';
import './App.css';

const styles = {
  home: {
    backgroundColor: 'black',
    height: 500,
    padding: 20
  }
}

function App() {
  return (
    <div style={styles.home}>
      <MenuItems />
    </div>
  );
}

export default App;
