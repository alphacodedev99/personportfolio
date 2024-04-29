import React from 'react';
import TitleComponent from '../Title/TitleComponent';


import profile1 from '../../assets/images/testimonials/profile1.png';
import profile2 from '../../assets/images/testimonials/profile2.png'
import profile3 from '../../assets/images/testimonials/profile3.png';
import profile4 from '../../assets/images/testimonials/profile4.png';
import CardTestimonials from './CardTestimonials';


function Testimonials() {

    const testimonialsItems = [
        {
           desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
           username: 'Admin',
           imageUrl: profile1
        },
        {
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            username: 'Admin',
            imageUrl: profile2
         },
         {
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            username: 'Admin',
            imageUrl: profile3
         },
         {
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            username: 'Admin',
            imageUrl: profile4
         }
    ]


	return (
		<div id='testimonial' className='testimonials'>
			<div className='container'>
				<TitleComponent
					title='Testimonials'
					desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
					color='white'
				/>

                <div className="testimonials_wrapper">
                        {testimonialsItems.map((item, index) => {
                            return <CardTestimonials 
                            item={item}
                            key={index} />
                        })}

                </div>
			</div>
		</div>
	);
}

export default Testimonials;
