import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import links from '../assets/links';
import users from '../assets/users';
import Header from './Header';
import Login from './Login';
import Sidebar from './Sidebar';

function Layout() {
	const [user, setUser] = useState(null);

	useEffect(() => {
		// Check localStorage for a logged-in user
		const foundUser = localStorage.getItem('user');
		if (foundUser) {
			setUser(JSON.parse(foundUser));
		}
	}, []);

	return (
		<div className='gap-2 md:gap-4 grid grid-cols-[3.5rem_1fr] md:grid-cols-[14rem_3fr] bg-stone-100 p-2 md:p-4 w-full h-full min-h-dvh text-stone-950 ca-container'>
			{user ? (
				<>
					<Sidebar links={links} user={user} />
					<div>
						<Header user={user} />
						<main className='mt-2 md:mt-4'>
							<Outlet />
						</main>
					</div>
				</>
			) : (
				<Login setUser={setUser} users={users} />
			)}
		</div>
	);
}

export default Layout;
