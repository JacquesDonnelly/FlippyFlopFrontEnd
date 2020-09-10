import React from 'react';
import './Card.css'


class Card extends React.Component {
	constructor(props) {
		super(props);
		this.flip = this.flip.bind(this)
		this.state = {is_flipped: false};
	}

	flip() {
		const priorFlipState = this.state.is_flipped;
		this.setState({is_flipped: !priorFlipState});
	}

	render() {
		const flippedClass = (this.state.is_flipped ? 'flipped' : '')
		const flippyThingClass = `flippything ${flippedClass}`
	
		return (
			<div className="flipCard">
				<div className={flippyThingClass} onClick={this.flip}>
					<div className="side front">Front of my Card</div>
					<div className="side back"> Back of my Card</div>
				</div>
			</div>
		)
	}
}


export default Card
