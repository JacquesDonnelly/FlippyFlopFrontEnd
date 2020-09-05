import React from 'react';
import Button from 'react-bootstrap/Button'
import Card from './Card.js'
import './TestCard.css'


function TestCard(props) {
	const card = {
		"front": 
		"This is a particularly long card for testing... \n 1. Proceeds from issue of shares \n 2. Proceeds from long-term borrowings \n 3. (Payment of lease liabilities) \n 4. (Dividends Paid) \n 5. Net cash from financing activities \n 6. Net increase / decrease in cash and cash equivalents \n 7. Cash and cash equivalents at beginning of the period \n 8. Total Cash and Cash equivalents ",
		"back": "This is not being rendered yet..."
	}
	return (
		<div className="testCardContainer">
			<Card front={card.front}/>
			<Button className="resultButton" variant="success">Easy Peasy Lemon Squeazy!</Button>
			<Button className="resultButton" variant="danger">Stressed Depressed Lemon Zest!</Button>
		</div>
	)
}

export default TestCard
