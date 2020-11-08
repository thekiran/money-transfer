import React, { Fragment } from 'react'

import './review.css'
import ReviewAward from './ReviewAward'
import ReviewCarousel from './ReviewCarousel'
const Review = () => {
	return (
		<Fragment>
			<div className='review-container'>
				<h2>See what the world’s largest publications have to say</h2>

				<div className='review-tabs'>
					<div className='tab'>
						<div className='tab-img'>Wired </div>{' '}
						<div className='tab-text'>Smart tech and sharp thinking are disrupting high-street banks</div>
					</div>
					<div className='tab'>
						<div className='tab-img'>Financial Times </div>{' '}
						<div className='tab-text'>
							TransferWise is looking to use the internet to spark a digital revolution in current
							financial services.
						</div>
					</div>
					<div className='tab'>
						<div className='tab-img'>The Economist </div>{' '}
						<div className='tab-text'>
							TransferWise takes a machete to the hefty fees that banks levy to send money across borders.
						</div>
					</div>
				</div>
			</div>
			{/* <div className='review-carousel'>
				<ReviewCarousel /> 
			</div> */}
			<ReviewAward />
		</Fragment>
	)
}

export default Review
