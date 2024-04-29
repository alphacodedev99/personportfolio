import React from 'react';

// images/icons
import behance from '../../assets/images/navbar/behance.png';
import linkedin from '../../assets/images/navbar/linkedin.png';
import twitter from '../../assets/images/navbar/twitter.png';

function Navbar() {
	const navItems = [
		'Home',
		'Case Studies',
		'Testimonial',
		'Recent Work',
		'Get In Touch',
	];

	return (
		<div id='back-to-top-anchor' className='navbar'>
			<div className='navbar_wrapper'>
				<div className='navbar_wrapper_items'>
					<ul>
						{navItems.map((el, index) => {
							const sectionId = el.toLowerCase().replace(/\s+/g, '-');
							return <li key={index}>
								<a href={`#${sectionId}`}>{el}</a>
							</li>;
						})}
					</ul>
				</div>

				<div className='navbar_wrapper_icons'>
					<img src={behance} alt='behance' />
					<img src={linkedin} alt='linkedin' />
					<img src={twitter} alt='twitter' />
				</div>
			</div>
		</div>
	);
}

export default Navbar;
