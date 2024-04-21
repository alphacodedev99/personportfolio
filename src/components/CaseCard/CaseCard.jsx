import React from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";

function CaseCard({ color, direction, image, title }) {
	return (
		<div
			className={`${
				direction === 'revers' ? 'reverseItem' : ''
			} studeContent_Card`}>
			<div className='leftSide'>
				<h2 style={{ color: color }}>{title}</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Inventore eum et veniam deleniti, necessitatibus ipsam
					distinctio reprehenderit officia dolore odio?
				</p>

				<button style={{backgroundColor: color}} className='btn_CaseCard'>View case study <MdKeyboardArrowRight /></button>
			</div>
			<div className='rightSide'>
				<img src={image} alt='' />
			</div>
		</div>
	);
}

export default CaseCard;
