import React from 'react'

import qoute from '../../assets/images/testimonials/qoute.png';

function CardTestimonials({item}) {
  return (
    <div className='card_testimonial'>

        <img src={qoute} alt="qoute" className='qouteImage' />

        <p>{item.desc}</p>

        <div className='user'>
            <img src={item.imageUrl} alt={item.username} />
            <h4>{item.username}</h4>
        </div>
    </div>
  )
}

export default CardTestimonials