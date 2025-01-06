import { Bell } from 'lucide-react';
import PropTypes from 'prop-types';
import React from 'react';
import Notifications from './Notifications';

function Header({ user }) {
	const displayName = user.name.split(' ')[0];

	return (
		<header className='flex justify-between items-center bg-white p-4 border-b rounded-md md:rounded-lg h-full max-h-[3.75rem] md:max-h-[5.5rem]'>
			<div>
				<h1 className='text-xl'>Hello, {displayName}!</h1>
				<p className='mt-1 text-body text-xs'>Welcome back to your dashboard.</p>
			</div>
			<nav className='flex items-center space-x-5'>
				<form className='md:flex hidden'>
					<input type='search' placeholder='Search...' className='bg-indigo-100/30 px-4 py-2 rounded-md' />
				</form>

				<Notifications count={3} icon={Bell} />
			</nav>
		</header>
	);
}

Header.propTypes = {
	user: PropTypes.object.isRequired
};

export default Header;
