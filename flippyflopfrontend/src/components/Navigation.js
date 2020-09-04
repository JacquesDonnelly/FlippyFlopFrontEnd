import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './Navigation.css'

function Navigation(props) {
	return (
		<Navbar bg="dark" variant="dark">
			<Navbar.Brand>FlippyFlop</Navbar.Brand>
			<Nav className="ml-auto">
				<Nav.Item>
					<Nav.Link>Learn</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link>Login</Nav.Link>
				</Nav.Item>
			</Nav>
		</Navbar>
	)
}

export default Navigation;
