import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import './TestCard.css'

const card = (
	<div className="Card">
		Hello, World!
	</div>
)


// TODO: 
// Make sure the button and card are always the correct size for each screen width
// Change the background color to dark grey
// Style the card (centering text) and make buttons look nice (color correctly)
// Center the TestCard component on the page

function TestCard(props) {
	return (
		<Container fluid>
			<Row className="justify-content-center someMargin">
				<Col md="auto">{card}</Col>
			</Row>
			<Row className="justify-content-center someMargin">
				<Button className="resultButton">Easy Peasy Lemon Squeazy!</Button>
			</Row>
			<Row className="justify-content-center someMargin">
				<Button className="resultButton">Stressed Depressed Lemon Zest!</Button>
			</Row>
		</Container>
	)
}

export default TestCard
