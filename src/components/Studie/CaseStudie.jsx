import React from 'react';
import CaseCard from '../CaseCard/CaseCard';

// images
import image1 from '../../assets/images/studies/image1.png';
import image2 from '../../assets/images/studies/image2.png';
import image3 from '../../assets/images/studies/image3.png';

function CaseStudie() {
	return (
		<div className='stude'>
			<div className='container'>
				<div className='headerInfo'>
					<h2>Case Studies</h2>
					<p>
						Solving user & business problems since last 15+
						years.Lorem ipsum dolor sit amet, consectetur adipiscing
						elit, sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua.{' '}
					</p>
				</div>

				<div className='studeContent'>
					<CaseCard
						color='#FFA217'
						direction='no-revers'
						image={image1}
					/>
					<CaseCard
						color='#000AFF'
						direction='revers'
						image={image2}
					/>
					<CaseCard
						color='#2AB090'
						direction='no-revers'
						image={image3}
					/>
				</div>
			</div>
		</div>
	);
}

export default CaseStudie;
