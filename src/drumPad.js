import React, { Component } from 'react';
import './App.css';
import DrumKey from './drumKey';



class DrumPad extends Component{

	render() {
		return (
			<div className="grid-container">
				
				<DrumKey id={this.props.keys[0].key} name={this.props.keys[0].name} 
				playSound={this.props.playSound}
					url={this.props.keys[0].url}/>

				<DrumKey id={this.props.keys[1].key} name={this.props.keys[1].name} 
				playSound={this.props.playSound}
					url={this.props.keys[1].url}/>

				<DrumKey id={this.props.keys[2].key} name={this.props.keys[2].name} 
				playSound={this.props.playSound}
					url={this.props.keys[2].url}/>

				<DrumKey id={this.props.keys[3].key} name={this.props.keys[3].name} 
				playSound={this.props.playSound}
					url={this.props.keys[3].url}/>

				<DrumKey id={this.props.keys[4].key} name={this.props.keys[4].name} 
				playSound={this.props.playSound}
					url={this.props.keys[4].url}/>

				<DrumKey id={this.props.keys[5].key} name={this.props.keys[5].name} 
				playSound={this.props.playSound}
					url={this.props.keys[5].url}/>

				<DrumKey id={this.props.keys[6].key} name={this.props.keys[6].name} 
				playSound={this.props.playSound}
					url={this.props.keys[6].url}/>

				<DrumKey id={this.props.keys[7].key} name={this.props.keys[7].name} 
				playSound={this.props.playSound}
					url={this.props.keys[7].url}/>

				<DrumKey id={this.props.keys[8].key} name={this.props.keys[8].name} 
				playSound={this.props.playSound}
					url={this.props.keys[8].url}/>
				
			</div>
		);
	}
}

export default DrumPad;