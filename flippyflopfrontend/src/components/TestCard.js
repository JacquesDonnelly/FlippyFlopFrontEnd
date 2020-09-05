import React from 'react';
import Button from 'react-bootstrap/Button'
import './TestCard.css'

function Card(props) {
	return (
		<div className="Card">
			{props.front}
		</div>
	)
}

// TODO: 
// Move Card to its own component file
// Change the background color to dark grey
// Style the card (centering text) and make buttons look nice (color correctly)
// Center (vertically using flex) the TestCard component on the page
// Make sure the layout is appropirate for mobile



function TestCard(props) {
	const card = {
		"front": "This is the front of my card!",
		"back": "You can't see this yet!"
	}
	return (
		<div className="testCardContainer">
			<Card front={card.front}/>
			<Button className="resultButton">Easy Peasy Lemon Squeazy!</Button>
			<Button className="resultButton">Stressed Depressed Lemon Zest!</Button>
		</div>
	)
}

export default TestCard
