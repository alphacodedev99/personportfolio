import React from 'react';

// images/icons
import behance from '../../assets/images/navbar/behance.png';
import linkedin from '../../assets/images/navbar/linkedin.png';
import twitter from '../../assets/images/navbar/twitter.png';

function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);
	const navItems = [
		'Home',
		'Case Studies',
		'Testimonial',
		'Recent Work',
		'Get In Touch',
	];

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

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
				<div className="only-mobile"></div>
				<div className='navbar_wrapper_icons'>
					<img src={behance} alt='behance' />
					<img src={linkedin} alt='linkedin' />
					<img src={twitter} alt='twitter' />
				</div>
				<div className="only-mobile">
					<button className='hamburger-btn' onClick={toggleMenu}>
						<svg width="14" height="10" viewBox="0 0 14 10" fill="none">
							<path d="M0 1H14M14 5H0M0 9H14" stroke="black" strokeWidth="2"/>
						</svg>
					</button>
				</div>
			</div>
			<div className={`side-menu ${isMenuOpen ? 'show' : ''}`}>
				<ul>
					{navItems.map((el, index) => {
						const sectionId = el.toLowerCase().replace(/\s+/g, '-');
						return <li key={index} style={{ transitionDelay: `${index * 0.1}s` }} className={isMenuOpen ? 'show' : ''}>
							<a href={`#${sectionId}`} onClick={toggleMenu}>{el}</a>
						</li>;
					})}
				</ul>
			</div>
		</div>
	);
}

export default Navbar;
