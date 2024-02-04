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
		<div className='navbar'>
			<div className='navbar_wrapper'>
				<div className='navbar_wrapper_items'>
					<ul>
						{navItems.map((el, index) => {
							return <li key={index}> {el} </li>;
						})}
					</ul>
				</div>

				<div className='navbar_wrapper_icons'>
					<img src={behance} alt='behance' />
					<img src={linkedin} alt='behance' />
					<img src={twitter} alt='behance' />
				</div>
			</div>
		</div>
	);
}

export default Navbar;
