import React, {Component} from 'react';
import './App.css';
import Game from './Game';
import Rando from './Rando';
import BrokenClick from './BrokenClick';
import ButtonRandomNum from './ButtonRandomNum';

class App extends Component {
  render() {
    return <div className="App">
      <Game/>
     {/* <Rando maxNum={8}/> */ }
      <BrokenClick/>
      <ButtonRandomNum/>
      </div>
  }
}

export default App;
