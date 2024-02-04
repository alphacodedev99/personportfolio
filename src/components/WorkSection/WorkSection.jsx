import React from 'react';

// images
import header1 from '../../assets/images/header/header1.png';
import header2 from '../../assets/images/header/header2.png';
import header3 from '../../assets/images/header/header3.png';
import header4 from '../../assets/images/header/header4.png';
import header5 from '../../assets/images/header/header5.png';

function WorkSection() {
	const allImages = [header1, header2, header3, header4, header5];

	return (
		<div className='worksection'>
			<div className='container'>
				{allImages.map((item, i) => {
					return (
						<div key={i} className='icon'>
							<img src={item} alt={`mojaSlika ${i}`} />
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default WorkSection;
