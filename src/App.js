import React from 'react';
import './App.css';
import Drum from './Drum';
import Drum2 from './Drum2';
import Title from './Title';
import { audioData } from './Data';
import { audioData2 } from './Data';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: ' ',
      play: true,
      toggleSound: true,
      value: 50
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleDisplay = display => this.setState({ display })

  handlePause = () => {
    this.setState({ play: !this.state.play });
    this.setState({ display: ' ' });
  }

  handlePlay = () => {
    this.setState({ play: !this.state.play })
  }

  handleBeepButton = () => this.setState({ toggleSound: !this.state.toggleSound })

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
      display: "volume: " + this.state.value
    })
  }

  render() {

    const buttonPause = <button onClick={this.handlePause}>pause</button>
    const buttonPlay = <button onClick={this.handlePlay}>play</button>
    const beepSound = <button onClick={this.handleBeepButton}>beepSound</button>
    const buttonSound = <button onClick={this.handleBeepButton}>buttonSound</button>

    return (
      <div className="machine">
        <Title />
        <div id="drum-machine">
          <div id="control-drum-pad">
            {this.state.toggleSound ?
              audioData.map(obj => (
                <Drum
                  id={obj.id}
                  innerText={obj.innerText}
                  src={obj.src}
                  handleDisplay={this.handleDisplay}
                  play={this.state.play}
                  vol={this.state.value}
                />)) :
              audioData2.map(obj => (
                <Drum2
                  id={obj.id}
                  innerText={obj.innerText}
                  src={obj.src}
                  handleDisplay={this.handleDisplay}
                  play={this.state.play}
                  vol={this.state.value}
                />
              ))}
          </div>
          <div id="control-another">
            <strong>Click to change sound</strong>
            <div id="toggle-sound">
              {!this.state.play ? buttonSound : (this.state.toggleSound) ?
                buttonSound : beepSound}
            </div>
            <div id="display">
              <strong>{this.state.display}</strong>
            </div>
            <span>volume</span>
            <div id="slide-bar">
              <input
                type="range"
                min="0"
                max="100"
                step="1"
                defaultValue="50"
                onChange={this.handleChange}
              />
            </div>
            <div id="play-pause">
              {this.state.play ? buttonPause : buttonPlay}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
