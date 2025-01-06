import { BriefcaseBusiness, FolderDot, LayoutDashboard, Mail, User, UsersRound } from 'lucide-react';
import { Link, NavLink } from 'react-router';
import React from 'react';
import { ChevronsUpDown } from 'lucide-react';

const links = [
	{
		id: 1,
		name: 'Dashboard',
		icon: <LayoutDashboard />
	},
	{
		id: 2,
		name: 'Members',
		icon: <UsersRound />
	},
	{
		id: 3,
		name: 'Inbox',
		icon: <Mail />
	},
	{
		id: 4,
		name: 'Projects',
		icon: <FolderDot />
	},
	{
		id: 5,
		name: 'Clients',
		icon: <User />
	},
	{
		id: 6,
		name: 'Work',
		icon: <BriefcaseBusiness />
	}
];

function Sidebar() {
	return (
		<aside className='top-4 z-10 sticky flex flex-col bg-white rounded-md h-100dvh overflow-y-scroll'>
			<header className='p-2 md:p-4 border-b'>
				<Link to='/' className='flex'>
					<figure className='max-w-fit'>
						<picture>
							<img src='/logo.webp' alt='Logo' className='md:flex hidden w-full max-w-48 h-full' />
							<img src='/logo_mini.webp' alt='Logo' className='flex md:hidden w-full max-w-12 h-full' />
						</picture>
					</figure>
				</Link>
			</header>
			<main className='p-2 md:p-4'>
				<ul className='flex flex-col gap-4 md:gap-2'>
					{links.map(link => {
						return (
							<li key={link.id}>
								<NavLink
									to={link.name.toLowerCase() === 'dashboard' ? '/' : `/${link.name.toLowerCase()}`}
									className={({ isActive }) =>
										`flex items-center gap-2 hover:bg-indigo-100 p-2 md:px-4 md:py-2 rounded-md font-medium hover:text-indigo-900 ${
											isActive ? 'bg-indigo-100' : ''
										}`
									}>
									<span>{link.icon}</span>
									<span className='md:flex hidden text-sm'>{link.name}</span>
								</NavLink>
							</li>
						);
					})}
				</ul>
			</main>
			<footer className='mt-auto p-2 md:p-4 border-t'>
				<button className='relative flex items-center gap-2 hover:bg-indigo-100 p-1 md:p-2 rounded-md w-full font-medium'>
					<figure className='max-w-fit'>
						<picture>
							<img src='/claudius_ayadi.webp' alt='Claudius A. photo' className='rounded-full size-8' />
						</picture>
					</figure>
					<div className='md:block hidden md:text-start'>
						<p className='font-medium text-sm'>Claudius A.</p>
						<p className='text-stone-600 text-xs'>hello@claudiusa.com</p>
					</div>

					<ChevronsUpDown className='md:block top-1/2 right-1 absolute hidden -translate-y-1/2 size-4' />
				</button>
			</footer>
		</aside>
	);
}

export default Sidebar;
