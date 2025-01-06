import React from 'react';
import PropTypes from 'prop-types';
import { Bell } from 'lucide-react';

function Header({ user }) {
	const displayName = user.name.split(' ')[0];

	return (
		<header className='flex justify-between items-center p-2 md:p-4 border-b'>
			<h1 className='font-bold text-xl'>Hello, {displayName}!</h1>
			<nav>
				<form>
					<input type='search' placeholder='Search...' />
				</form>

				<Bell />
			</nav>
		</header>
	);
}

Header.propTypes = {
	user: PropTypes.object.isRequired
};

export default Header;
