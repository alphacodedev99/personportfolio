import React from 'react';

// icons
import { MdKeyboardArrowRight } from 'react-icons/md';

function RecentCard({ imgUrl, title, desc }) {
	return (
		<div className='recent_card'>
			<img src={imgUrl} alt={title} />

			<h2>{title}</h2>

			<p>{desc}</p>

			<button>
				Know More 
                <MdKeyboardArrowRight size={20} />{' '}
			</button>
		</div>
	);
}

export default RecentCard;
