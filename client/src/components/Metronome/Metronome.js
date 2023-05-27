import { React, Component } from "react";
import './Metronome.css'

const click1 = "//daveceddia.com/freebies/react-metronome/click1.wav";
const click2 = "//daveceddia.com/freebies/react-metronome/click2.wav";

class Metronome extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isPlaying: false,
            count: 0,
            bpm: 100,
            beatsPerMeasure: 4
        };

        this.click1 = new Audio(click1)
        this.click2 = new Audio(click2)
    };

    handleInputChange = (e) => {
        const bpm = e.target.value

        if(this.state.isPlaying) {
            clearInterval(this.timer);
            this.timer = setInterval(this.playClick, (60 / bpm) * 1000);
            this.setState({
                count: 0,
                bpm
              });
        } else {
            this.setState({ bpm });
        }
    };
    playClick = () => {
        const {count, beatsPerMeasure} = this.state;
        if(count % beatsPerMeasure === 0) {
            this.click2.play()
        } else {
            this.click1.play()
        }

        this.setState(state => ({
            count: (state.count + 1) % state.beatsPerMeasure
        }));
    };

    startStop = () => {
        if(this.state.isPlaying) {
            clearInterval(this.timer);
            this.setState({
                isPlaying: false
            })
        } else {
            this.timer = setInterval(this.playClick, (60 / this.state.bpm) * 1000);
            this.setState(
            {
                count: 0,
                isPlaying: true
            },
            this.playClick
            )
        }
    }
        render() {
            const {isPlaying, bpm} = this.state;
            return (
                <div className="metronome">
        
          <p className="bpm-p">{bpm} BPM</p>
          <div className="bpm-slider">
          <input
            type="range"
            min="60"
            max="300"
            value={bpm}
            onChange={this.handleInputChange}
          />
        </div>
        <button className='metronome-btn'onClick={this.startStop}>{isPlaying ? "Stop" : "Start"}</button>
      </div>
            )
        }
}

export default Metronome;
