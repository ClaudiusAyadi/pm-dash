import React from 'react';
import Platform from '../components/Platform';
import Statistics from '../components/Statistics';

const projects = [
	{
		title: 'Website Redesign',
		type: 'Website Development',
		date: '2025-01-01',
		team: ['John Doe', 'Jane Doe', 'Alex Doe'],
		files: 9,
		progress: 80
	},
	{
		title: 'Mobile App Development',
		type: 'Mobile App',
		date: '2025-01-01',
		team: ['John Doe', 'Jane Doe', 'Alex Doe'],
		files: 9,
		progress: 80
	},
	{
		title: 'Website Development',
		type: 'Website ',
		date: '2025-01-03',
		team: ['John Doe', 'Jane Doe', 'Alex Doe'],
		files: 9,
		progress: 80
	},
	{
		title: 'Marketing Campaign',
		type: 'Marketing',
		date: '2025-01-4',
		team: ['John Doe', 'Jane Doe', 'Alex Doe'],
		files: 9,
		progress: 80
	},
	{
		title: 'Product Launch',
		type: 'Product Management',
		date: '2025-01-05',
		team: ['John Doe', 'Jane Doe', 'Alex Doe'],
		files: 15,
		progress: 40
	}
];

function Home() {
	return (
		<div>
			<div className='gap-2 grid sm:grid-cols-2 xl:grid-cols-4'>
				<Statistics title='Project Statistics' />
				<Platform title='Platforms' />
				<Statistics title='Project Statistics' />
				<Platform title='Platforms' />
			</div>
		</div>
	);
}

export default Home;
