import React from 'react'
import Platform from '../platform/Platform'

import './footer.css'

const Footer = () => {
	return (
		<footer>
			<Platform />
			<div className='footer-container'>
				<div className='footer-content'>
					<div className='footer-links'>
						<ul className='link-list'>
							<p>Company and team</p>
							<li>
								<button>Company and team</button>
								<button>News and blog</button>
								<button>Press</button>
								<button>Careers</button>
								<button>Affiliates and partnerships</button>
							</li>
						</ul>
						<ul className='link-list'>
							<p> Help and support </p>
							<li>
								<button>Help centre</button>
								<button>Mid-market rate</button>
							</li>
						</ul>
						<ul className='link-list'>
							<p> Learn more</p>
							<li>
								<button> Send money abroad </button>
								<button>Mid-market rate</button>
								<button>Swift/BIC codes</button>
								<button>Currency converter</button>
								<button>IBAN codes</button>
								<button>Rate alerts</button>
								<button>Compare exchange rates</button>
							</li>
						</ul>
						<ul className='link-list'>
							<p>Follow us</p>
							<button>
								<i className='fa fa-facebook-f' />
							</button>
							<button>
								<i className='fa fa-twitter' />
							</button>
							<button>
								<i className='fa fa-instagram' />
							</button>
						</ul>
					</div>
					<div className='footer-showcase'>
						<div className='show-list'>
							<button>TransferWise</button>
							<div className='flex'>
								<button>Legal</button>
								<button>Country site map</button>
							</div>
							<button>Privacy policy</button>
							<button>Cookie Policy </button>
						</div>

						<p>© TransferWise Inc 2020</p>
						<p>
							TransferWise Inc. is authorized to operate in most states. In the other states, the program
							is sponsored by Community Federal Savings Bank, to which we're a service provider.
						</p>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
