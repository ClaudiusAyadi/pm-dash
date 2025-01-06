import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { Outlet } from 'react-router';
import links from '../assets/links';
import user from '../assets/user';

function Layout() {
	return (
		<div className='relative gap-4 grid grid-cols-[3.5rem_1fr] md:grid-cols-[14rem_3fr] bg-stone-100 p-2 md:p-4 w-full max-w-[100dvw] h-full min-h-dvh text-stone-950'>
			<Sidebar links={links} user={user} />
			<div className='1000px'>
				<Header user={user} />
				<Outlet />
			</div>
		</div>
	);
}

export default Layout;
