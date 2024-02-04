import React from 'react';

function CaseCard({ color, direction, image }) {
	return (
		<div
			className={`${
				direction === 'revers' ? 'reverseItem' : ''
			} studeContent_Card`}>
			<div className='leftSide'>
				<h2 style={{ color: color }}>Title</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Inventore eum et veniam deleniti, necessitatibus ipsam
					distinctio reprehenderit officia dolore odio?
				</p>
			</div>
			<div className='rightSide'>
				<img src={image} alt='' />
			</div>
		</div>
	);
}

export default CaseCard;
