import React from 'react';

import {
	FooterWrapper,
	FooterLink,
	FooterAddress,
	FooterCopy
} from './Footer.css';

function Footer({ address, telNumber, email }) {
	return (
		<FooterWrapper>
			<FooterLink
				href={`tel:${telNumber}`}
			>
				tel: {telNumber}
			</FooterLink>
			<FooterLink
				href={`mailto:${email}`}
			>
				email: {email}
			</FooterLink>
			<FooterAddress>{address}</FooterAddress>
			<FooterCopy>Copyright Fenster & Bauertechnik</FooterCopy>
		</FooterWrapper>
	);
}

export default Footer;
