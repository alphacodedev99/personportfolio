import React from 'react';

// images
import profileImage from '../../assets/images/header/profile.jpg';

function Hero() {
	return (
		<div className='hero'>
			<div className='container'>
				<div className='hero_left'>
					<h2>AlphaCode Dev</h2>

					<p>
						Intro text: Lorem ipsum dolor sit amet, consectetur
						adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua.{' '}
					</p>

					<button>Let’s get started</button>
				</div>

				<div className='hero_right'>
					<img src={profileImage} alt='profile' />
				</div>
			</div>
		</div>
	);
}

export default Hero;
