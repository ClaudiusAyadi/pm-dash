import { Link, NavLink } from 'react-router';
import React from 'react';
import { ChevronsUpDown } from 'lucide-react';
import PropTypes from 'prop-types';

function Sidebar({ links, user }) {
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
						const Icon = link.icon;
						return (
							<li key={link.id}>
								<NavLink
									to={link.name.toLowerCase() === 'dashboard' ? '/' : `/${link.name.toLowerCase()}`}
									className={({ isActive }) =>
										`flex items-center gap-2 hover:bg-indigo-100 p-2 md:px-4 md:py-2 rounded-md font-medium hover:text-indigo-900 ${
											isActive ? 'bg-indigo-100' : ''
										}`
									}>
									<span>
										<Icon />
									</span>
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
							<img src={user.image} alt={user.name + ' avatar'} className='rounded-full size-8' />
						</picture>
					</figure>
					<div className='md:block hidden md:text-start'>
						<p className='font-medium text-sm'>{user.name}</p>
						<p className='text-stone-600 text-xs'>{user.email}</p>
					</div>
					<ChevronsUpDown className='md:block top-1/2 right-1 absolute hidden -translate-y-1/2 size-4' />
				</button>
			</footer>
		</aside>
	);
}
Sidebar.propTypes = {
	links: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired,
			icon: PropTypes.object.isRequired
		})
	).isRequired,
	user: PropTypes.shape({
		name: PropTypes.string.isRequired,
		email: PropTypes.string.isRequired,
		image: PropTypes.string.isRequired
	}).isRequired
};

export default Sidebar;
