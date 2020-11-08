import React, { useEffect, useState } from 'react'
import { Fragment } from 'react'
import p1 from './img/carousel1.jpeg'
import p2 from './img/carousel2.jpeg'
import p3 from './img/carousel3.jpeg'
import './reviewCarousel.css'
const ReviewCarousel = () => {
	useEffect(() => {
		const carouselSlide = document.querySelector('.carousel-slide')
		const carouselImages = document.querySelectorAll('.review')
		//Buttons
		const previousBtn = document.querySelector('#previousBtn')
		const nextBtn = document.querySelector('#nextBtn')
		//Counter
		let counter = 1
		const size = carouselImages[0].clientWidth

		carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)'

		nextBtn.addEventListener('click', () => {
			if (counter >= carouselImages.length - 1) return
			carouselSlide.style.transition = 'transform 0.2s ease-in-out'
			counter++
			carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)'
		})

		previousBtn.addEventListener('click', () => {
			if (counter <= 0) return
			carouselSlide.style.transition = 'transform 0.2s ease-in-out'
			counter--
			carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)'
		})

		carouselSlide.addEventListener('transitionend', () => {
			if (carouselImages[counter].id === 'lastClone') {
				carouselSlide.style.transition = 'none'
				counter = carouselImages.length - 2
				carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)'
			}
			if (carouselImages[counter].id === 'firstClone') {
				carouselSlide.style.transition = 'none'
				counter = carouselImages.length - counter
				carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)'
			}
		})

		console.log(carouselImages.length)
	}, [])
	return (
		<Fragment>
			<div className='carousel-container'>
				<div className='carousel-slide'>
					<div className='review' id='lastClone'>
						<img src={p3} alt />
					</div>
					<div className='review'>
						<img src={p1} alt />
					</div>
					<div className='review'>
						<img src={p2} alt />
					</div>
					<div className='review'>
						<img src={p3} alt />
					</div>
					<div className='review' id='firstClone'>
						<img src={p1} alt />
					</div>
				</div>
			</div>
			<button id='previousBtn'>
				<i className='fas fa-arrow-left' id='previousBtn' />
			</button>
			<button id='nextBtn'>
				<i className='fas fa-arrow-right' id='nextBtn' />
			</button>
		</Fragment>
	)
}
export default ReviewCarousel
