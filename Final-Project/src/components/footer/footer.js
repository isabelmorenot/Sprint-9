import React from 'react';
//import { footerLogo } from '../../assets/img'
import { ContainerFooter } from './footerStyles';

export const Footer = () => {
	return (
        <ContainerFooter>
            <footer className="footer-container">
			<div className="footer-nav-container">
				<nav className="footer-nav-links-container">
					<div className="footer-nav-links-list-container">
						<ul>
							<h4 className="footer-nav-title">Links</h4>
                            <div className='footer-nav-link-item'>
                                    <div className="footer-nav-link">
                                        <li>Home</li>
                                        <li>Store</li>
                                        <li >About</li>
                                    </div>
                            </div>
						</ul>
					</div>
					<div className="footer-nav-links-list-container">
						<ul>
							<h4 className="footer-nav-title">Support</h4>
                            <div className='footer-nav-link-item'>
                                <li>FAQ</li>
                                <li>News</li>
                            </div>
						</ul>
					</div>
					<div className="footer-nav-links-list-container">
						<ul>
							<h4 className="footer-nav-title">Contact</h4>
                            <div className='footer-nav-link-item'>
                                <li >cosmeticstore@gmail.com</li>
							    <li >+34 622 081 095</li>
                            </div>
						</ul>
					</div>
				</nav>
			</div>
			<div className="footer-copyright">
				<p>Copyright © & by Isabel Moreno 2022.</p>

				<div className="footer-terms">
					<p >Terms and Conditions</p>
					<p>Legal warning</p>
				</div>
			</div>
		</footer>
    </ContainerFooter>
	
	);
};