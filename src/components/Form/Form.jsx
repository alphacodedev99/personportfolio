import React from 'react'
import TitleComponent from '../Title/TitleComponent'

function Form() {
  return (
    <div id='get-in-touch' className='form'>
			<div className='container'>
				<TitleComponent
					title='Get Touch'
					desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
					color='white'
				/>
				<div className="testimonials_wrapper">
					<form>
						<div className='form_item'>
							<label htmlFor="">UserName</label>
							<input type="text" placeholder='Inser Username' />
						</div>
						<div className='form_item'>
							<label htmlFor="">Email</label>
							<input type="text" placeholder='Inser Email' />
						</div>
						<div className='form_item'>
							<label htmlFor="">Message</label>
							<input type="text" placeholder='Inser Message' />
						</div>
						<button type='submit' className='btn_submit'>Submit</button>
					</form>
				</div>
			</div>
		</div>
  )
}

export default Form