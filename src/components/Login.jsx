import PropTypes from 'prop-types';
import React, { useState } from 'react';

function Login({ setUser, users }) {
	const [email, setEmail] = useState('');
	const [error, setError] = useState('');

	const handleLogin = () => {
		const foundUser = users.find(u => u.email === email);
		if (foundUser) {
			localStorage.setItem('user', JSON.stringify(foundUser));
			setUser(foundUser);
		} else {
			setError('Invalid email! Please try again.');
		}
	};

	return (
		<div className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-80'>
			<div className='bg-white shadow-lg p-6 rounded-md w-[80%] max-w-md'>
				<h2>Login</h2>
				<p className='mb-4'>Please enter your work email to continue.</p>
				<input
					type='email'
					placeholder='Enter your email'
					value={email}
					onChange={e => setEmail(e.target.value)}
					className='bg-indigo-100/30 mb-4 px-4 py-2 border rounded-md w-full'
				/>
				{error && <p className='text-red-500 text-sm'>{error}</p>}
				<button onClick={handleLogin} className='bg-indigo-600 hover:bg-indigo-700 mt-2 p-2 rounded-md w-full text-white'>
					Log In
				</button>
			</div>
		</div>
	);
}

Login.propTypes = {
	setUser: PropTypes.func.isRequired,
	users: PropTypes.array.isRequired
};

export default Login;
