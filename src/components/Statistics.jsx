import ApexCharts from 'apexcharts';
import PropTypes from 'prop-types';
import React from 'react';

function Statistics({ title }) {
	const options = {
		// set the labels option to true to show the labels on the X and Y axis
		xaxis: {
			show: true,
			categories: ['01 Feb', '02 Feb', '03 Feb', '04 Feb', '05 Feb', '06 Feb', '07 Feb'],
			labels: {
				show: true,
				style: {
					fontFamily: 'Inter, sans-serif',
					cssClass: 'text-xs font-normal fill-gray-500'
				}
			},
			axisBorder: {
				show: false
			},
			axisTicks: {
				show: false
			}
		},
		yaxis: {
			show: true,
			labels: {
				show: true,
				style: {
					fontFamily: 'Inter, sans-serif',
					cssClass: 'text-xs font-normal fill-gray-500'
				},
				formatter: function (value) {
					return '$' + value;
				}
			}
		},
		series: [
			{
				name: 'Developer Edition',
				data: [150, 141, 145, 152, 135, 125],
				color: '#1A56DB'
			},
			{
				name: 'Designer Edition',
				data: [43, 13, 65, 12, 42, 73],
				color: '#7E3BF2'
			}
		],
		chart: {
			sparkline: {
				enabled: false
			},
			height: '100%',
			width: '100%',
			type: 'area',
			fontFamily: 'Inter, sans-serif',
			dropShadow: {
				enabled: false
			},
			toolbar: {
				show: false
			}
		},
		tooltip: {
			enabled: true,
			x: {
				show: false
			}
		},
		fill: {
			type: 'gradient',
			gradient: {
				opacityFrom: 0.55,
				opacityTo: 0,
				shade: '#1C64F2',
				gradientToColors: ['#1C64F2']
			}
		},
		dataLabels: {
			enabled: false
		},
		stroke: {
			width: 6
		},
		legend: {
			show: false
		},
		grid: {
			show: false
		}
	};

	if (document.getElementById('labels-chart') && typeof ApexCharts !== 'undefined') {
		const chart = new ApexCharts(document.getElementById('labels-chart'), options);
		chart.render();
	}

	return (
		<article className='bg-white rounded-md md:rounded-lg w-full max-w-sm'>
			<div className='flex justify-between items-center p-4'>
				<h2>{title}</h2>
				<p className='flex justify-center items-center font-semibold text-green-500'>
					<span>23%</span>
					<svg className='w-3 h-3 ms-1' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 10 14'>
						<path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 13V1m0 0L1 5m4-4 4 4' />
					</svg>
				</p>
			</div>
			<div id='labels-chart' className='text-body'></div>
		</article>
	);
}

Statistics.propTypes = {
	title: PropTypes.string.isRequired
};

export default Statistics;
