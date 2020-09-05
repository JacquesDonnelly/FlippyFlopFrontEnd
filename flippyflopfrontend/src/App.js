import React from 'react';
import Navigation from './components/Navigation'
import TestCard from './components/TestCard'
import './App.css';

function App() {
  return (
		<div className="App">
			<Navigation />
			<div className="AppContent">
				<TestCard />
			</div>
		</div>
  );
}

export default App;
