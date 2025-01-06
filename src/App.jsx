import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Layout from './components/Layout';
import Home from './pages/Home';
import Members from './pages/Members';

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='members' element={<Members />} />
					<Route path='*' element={<div>Not Found</div>} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
