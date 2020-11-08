import React, { useEffect, useState } from 'react'
import one from '../../img/bank.svg'
import two from '../../img/school.svg'
import three from '../../img/money.svg'
import four from '../../img/about.svg'
import five from '../../img/calculator.svg'
import six from '../../img/report.svg'
import './instruction.css'

const Instruction = () => {
	const [ cont, setCont ] = useState(false)

	useEffect(
		() => {
			if (cont) {
				const card = cont.firstChild
				if (card) {
					cont.addEventListener('mousemove', (e) => {
						let xAxis = (window.innerWidth / 2 - e.pageX) / 50
						let yAxis = (window.innerHeight / 2 - e.pageY) / 50
						if (card && card.style && card.style.transform) {
							card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
						}
						if (card.children) {
							let children = Array.from(card.children)
							if (children[0]) {
								// console.log(children)
								children[0].style.transform = 'translateZ(-50px)'
								children[1].style.transform = 'translateZ(-50px)'
								children[2].style.transform = 'translateZ(-50px)'
							}
						}
					})
					//Animate In
					cont.addEventListener('mouseenter', (e) => {
						if (card.children) {
							let children = Array.from(card.children)
							if (children[0]) {
								children[0].style.transition = 'none'
								children[1].style.transition = 'none'
								children[2].style.transition = 'none'
							}
						}
					})
					//Animate Out
					cont.addEventListener('mouseleave', (e) => {
						if (card.children) {
							let children = Array.from(card.children)
							if (children[0]) {
								children[0].style.transition = 'all 0.5s ease'
								children[1].style.transition = 'all 0.5s ease'
								children[2].style.transition = 'all 0.5s ease'
								children[0].style.tansform = `rotateY(0deg) rotateX(0deg)`
								children[1].style.tansform = `rotateY(0deg) rotateX(0deg)`
								children[2].style.tansform = `rotateY(0deg) rotateX(0deg)`
							}
						}
					})
				}
			}
		},
		[ cont ]
	)
	const cardval = (e) => {
		setCont(e.target)
	}
	const cardout = (e) => {
		setCont(false)
		if (e.target.children[0]) e.target.children[0].style.transform = `rotateY(${0}deg) rotateX(${0}deg)`

		if (e.target.children[0]) {
			let children = e.target.children[0].children
			if (children[0]) {
				children[0].style.transition = 'all 0.5s ease'
				children[1].style.transition = 'all 0.5s ease'
				children[2].style.transition = 'all 0.5s ease'
				children[0].style.tansform = `rotateY(0deg) rotateX(0deg)`
				children[1].style.tansform = `rotateY(0deg) rotateX(0deg)`
				children[2].style.tansform = `rotateY(0deg) rotateX(0deg)`
			}
		}
	}
	return (
		<div className='instruction-container'>
			<div className='ins-content'>
				<h1 className='inst-title'>How to send money from INR to USD.</h1>
				<div className='int-grid'>
					<div className='inst-cover' onMouseEnter={cardval} onMouseLeave={cardout}>
						<div className='inst-one'>
							<img src={one} alt='school' className='inst-img' />
							{/* <One /> */}
							<h6>1. Register for free.</h6>
							<p>
								Sign up online or in our app for free. All you need is an email address, or a Google or
								Facebook account.
							</p>
						</div>
					</div>
					<div className='inst-cover' onMouseEnter={cardval} onMouseLeave={cardout}>
						<div className='inst-two'>
							<img src={two} alt='school' className='inst-img' />
							<h6>2. Choose an amount to send.</h6>
							<p>
								Tell us how much you want to send. We’ll show you our fees upfront, and tell you when
								your money should arrive.
							</p>
						</div>
					</div>

					<div className='inst-cover' onMouseEnter={cardval} onMouseLeave={cardout}>
						<div className='inst-three'>
							<img src={three} alt='school' className='inst-img' />
							<h6>3. Add recipient’s bank details.</h6>
							<p>
								Fill in the details of your recipient’s bank account. If you don’t know their details,
								we can request them for you.
							</p>
						</div>
					</div>

					<div className='inst-cover' onMouseEnter={cardval} onMouseLeave={cardout}>
						<div className='inst-four'>
							<img src={four} alt='school' className='inst-img' />
							<h6>4. Verify your identity.</h6>
							<p>
								For some currencies, or for large transfers, we need a photo of your ID. This helps us
								keep your money safe.
							</p>
						</div>
					</div>

					<div className='inst-cover' onMouseEnter={cardval} onMouseLeave={cardout}>
						<div className='inst-five'>
							<img src={five} alt='school' className='inst-img' />
							<h6>5. Pay for your transfer.</h6>
							<p>Send your money with a bank transfer.</p>
						</div>
					</div>

					<div className='inst-cover' onMouseEnter={cardval} onMouseLeave={cardout}>
						<div className='inst-six'>
							<img src={six} alt='school' className='inst-img' />
							<h6>6. That’s it.</h6>
							<p>
								We’ll handle the rest. You can track your transfer in your account, and we'll tell your
								recipient it's coming.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Instruction
