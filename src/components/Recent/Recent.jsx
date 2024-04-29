import React from 'react';
import TitleComponent from '../Title/TitleComponent';
import RecentCard from './RecentCard';

// images
import work1 from '../../assets/images/work/work1.png';
import work2 from '../../assets/images/work/work2.png';

function Recent() {
	return (
		<div id='recent-work' className="recent">
			<div className='container'>
				<TitleComponent
					title='Recent Work'
					desc='Solving user & business problems since last 15+ years.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
					color='black'
				/>
				<div className='recent_wrapper'>
					<RecentCard
						imgUrl={work1}
						title='Work Name Here'
						desc='Labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.'
					/>
					<RecentCard 
					imgUrl={work2}
					title='Work Name Here'
					desc='Labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.'
					/>
				</div>
			</div>
		</div>
	);
}

export default Recent;
