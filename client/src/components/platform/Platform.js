import React from 'react'

import apple from './img/apple.svg'
import google from './img/play.svg'

import './platform.css'
const Platform = () => {
	return (
		<div className='plat-container'>
			<div className='plat-content'>
				<div className='plat'>
					<div className='plat-head'>
						<h1>Get the app.</h1>
						<p>
							Keep track of your transfers on the go with the TransferWise mobile app. Make new or repeat
							transfers - wherever you are - at the touch of a button.
						</p>
					</div>
					<div className='plat-img'>
						<img src={apple} alt='apple' />
						<img src={google} alt='google' />
					</div>
					<div className='plat-review'>
						<div className='plat-re'>
							<i class='fas fa-star' />
							<i class='fas fa-star' />
							<i class='fas fa-star' />
							<i class='fas fa-star' />
							<i class='fas fa-star' />
							<span>4.8, 17.5K Ratings</span>
						</div>
						<div className='plat-re'>
							<i class='fas fa-star' />
							<i class='fas fa-star' />
							<i class='fas fa-star' />
							<i class='fas fa-star' />
							<i class='fas fa-star' />
							<span>4.5, 58.8K Ratings</span>
						</div>
					</div>
				</div>
				<div className='hero-img'>
					<img
						src='https://transferwise.com/staticrab/homepage/_next/static/images/no-borderless-64c13228939eadcf44eb79c73b12e796.png'
						alt=''
					/>
				</div>
			</div>
		</div>
	)
}

export default Platform
