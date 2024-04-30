import React from 'react';
import CaseCard from '../CaseCard/CaseCard';

// images
import image1 from '../../assets/images/studies/image1.png';
import image2 from '../../assets/images/studies/image2.png';
import image3 from '../../assets/images/studies/image3.png';
import TitleComponent from '../Title/TitleComponent';

function CaseStudie() {
	return (
		<div className='stude'>
			<div className='container'>
				<div className='headerInfo'>
					<TitleComponent 
					title='Case Studies' 
					desc='Solving user & business problems since last 15+
						years.Lorem ipsum dolor sit amet, consectetur adipiscing
						elit, sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua.'
						color='#080808'	
					/>
				</div>

				<div className='studeContent'>
					<CaseCard
						color='#FFA217'
						background='#fff6e9'
						direction='no-revers'
						image={image1}
						title="Fintech"
					/>
					<CaseCard
						color='#000AFF'
						background='#d0e6ff'
						direction='revers'
						image={image2}
						title="EdTech"
					/>
					<CaseCard
						color='#2AB090'
						background='#e0fff8'
						direction='no-revers'
						image={image3}
						title="AlphaTech"
					/>
				</div>
			</div>
		</div>
	);
}

export default CaseStudie;
