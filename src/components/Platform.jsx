import { Apple, Globe, Smartphone, TabletSmartphone } from 'lucide-react';
import PropTypes from 'prop-types';
import React from 'react';

const platforms = [
	{
		title: 'Websites',
		count: 58,
		icon: <Globe />
	},
	{
		title: 'IOS',
		count: 87,
		icon: <Apple />
	},
	{
		title: 'Andriod',
		count: 109,
		icon: <Smartphone />
	},
	{
		title: 'TabletS',
		count: 25,
		icon: <TabletSmartphone />
	}
];

function Platform({ title }) {
	return (
		<article className='bg-white p-4 rounded-md md:rounded-lg w-full max-w-sm'>
			<h2 className='pb-4'>{title}</h2>

			<div className='items-start gap-8 grid grid-cols-2 mt-4 md:h-full md:max-h-[calc(100%-4rem)]'>
				{platforms.map((platform, index) => {
					return (
						<div key={index} className={`space-y-2 text-body  ${index >= 2 ? 'mt-auto' : ''}`}>
							<h3>{platform.count}</h3>
							<p className='flex items-center space-x-2'>
								{platform.icon}
								<span>{platform.title}</span>
							</p>
						</div>
					);
				})}
			</div>
		</article>
	);
}

Platform.propTypes = {
	title: PropTypes.string.isRequired
};

export default Platform;
