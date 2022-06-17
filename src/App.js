import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		// BEM

		<div className="App">
			<Routes>
				<Route path="/" element={[<Header />, <Home />]} />
			</Routes>
		</div>
	);
}

export default App;
