import React, { Component } from 'react';
import './App.css';
import DrumPad from './drumPad';

const DisplaySound = (props) =>(
  <div>
    <p id="display">{props.sound}</p>
  </div>
  );


class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      keys: [
      {
        keyCode: 81,
        key: "Q",
        name: "Guitar1",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
      },
      {
        keyCode: 87,
        key: "W",
        name: "Guitar2",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
      },
      {
        keyCode: 69,
        key: "E",
        name: "Guitar3",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
      },
      {
        keyCode: 65,
        key: "A",
        name: "Guitar4",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
      },
      {
        keyCode: 83,
        key: "S",
        name: "Clap",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
      },
      {
        keyCode: 68,
        key: "D",
        name: "Open-Hats",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
      },
      {
        keyCode: 90,
        key: "Z",
        name: "Kick-&-Hat",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
      },
      {
        keyCode: 88,
        key: "X",
        name: "Kick",
        url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
      },
      {
        keyCode: 67,
        key: "C",
        name: "Closed-Hats",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
      }
    ],
    currentSound: ""
    }
    this.playSound = this.playSound.bind(this);
    this.updateDisplay = this.updateDisplay.bind(this);
  }

  updateDisplay = (name) => {
    this.setState({currentSound: name});
  }

  playSound = (trigger, name) => {
    console.log(`trigger = ${trigger}, name = ${name}`);
    const audio = document.getElementById(trigger);
    this.updateDisplay(name);
    audio.play();
  }

  render() {
    return (
      <div className="App" id="drum-machine">
        <h1>Durm Machine</h1>

        <DrumPad playSound={this.playSound} keys={this.state.keys}/>
        <DisplaySound sound={this.state.currentSound}/>
      </div>
    );
  }
}

export default App;
