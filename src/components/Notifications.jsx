import React from 'react';
import PropTypes from 'prop-types';

function Notifications({ count, icon }) {
	const Icon = icon;
	return (
		<button className='relative flex items-center hover:bg-indigo-100 p-2 rounded-md'>
			<Icon />
			<span className='top-0 right-0 absolute flex justify-center items-center bg-indigo-100 -mt-1 -mr-1 p-1 rounded-full text-xs size-5'>
				{count}
			</span>
		</button>
	);
}

Notifications.propTypes = {
	count: PropTypes.number.isRequired,
	icon: PropTypes.object.isRequired
};

export default Notifications;
