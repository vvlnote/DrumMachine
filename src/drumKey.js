import React from 'react';
import './App.css';

const DrumKey = (props) => {
	return (
		<div className="drum-pad" id={props.name} 
		 onClick={() => props.playSound(props.id, props.name)}>
		 {props.id} 
		 <audio className='clip' id={props.id} src={props.url} />
		</div>
		);
};

export default DrumKey;
