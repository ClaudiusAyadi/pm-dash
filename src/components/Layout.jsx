import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { Outlet } from 'react-router';

function Layout() {
	return (
		<div className='relative gap-4 grid grid-cols-[3.5rem_1fr] md:grid-cols-[14rem_3fr] bg-stone-100 p-2 md:p-4 w-full max-w-[100dvw] h-full min-h-dvh text-stone-950'>
			<Sidebar />
			<div className='1000px'>
				<Header />
				<Outlet />
			</div>
		</div>
	);
}

export default Layout;
