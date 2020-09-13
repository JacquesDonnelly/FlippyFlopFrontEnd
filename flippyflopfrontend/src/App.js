import React, { useState } from 'react';
import Navigation from './components/Navigation'
import TestCard from './components/TestCard'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import { AuthContext, useAuth } from "./context/auth";
import PrivateRoute from './PrivateRoute';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Redirect } from "react-router-dom";
import './App.css';

function Login() {
	const [isLoggedIn, setLoggedIn] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { setAuthTokens } = useAuth();

	const handleSubmit = event => {
		// TODO: make API call to get a token
		event.preventDefault();
		console.log(email);
		console.log(password);
		// TODO: if valid username and password, then set token
		// TODO: Handle errors properly
		setAuthTokens('some token string');
		setLoggedIn(true);
	}

	if (isLoggedIn) {
		return <Redirect to="/" />;
	}

	return (
		<Form onSubmit={handleSubmit}>
			<Form.Group controlId="formBasicEmail">
				<Form.Label>Email address</Form.Label>
				<Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)} />
			</Form.Group>
			<Form.Group controlId="formBasicPassword">
				<Form.Label>Password</Form.Label>
				<Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
			</Form.Group>
			<Button variant="primary" type="submit">
				Login
			</Button>
		</Form>
	)
}

function Admin() {
	return <h1> I'm an admin! </h1>
}

function App() {
	const existingTokens = JSON.parse(localStorage.getItem("tokens"));
	const [authTokens, setAuthTokens] = useState(existingTokens);

	const setTokens = (data) => {
		localStorage.setItem("tokens", JSON.stringify(data));
		setAuthTokens(data);
	}

  return (
		<AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
			<div className="App">
				<Navigation />
				<div className="AppContent">
					<Router>
						<Switch>
							<Route path="/login" component={Login} />
							<PrivateRoute path="/admin" component={Admin} />
							<PrivateRoute path="/" component={TestCard} />
						</Switch>
					</Router>
				</div>
			</div>
		</AuthContext.Provider>
  );
}

export default App;
