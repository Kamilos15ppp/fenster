import styled from 'styled-components';
import breakpoints from "../../utils/breakpoints";

export const FooterWrapper = styled.footer`
	display: flex;
  	margin-top: 3rem;
  	padding: 1.6rem 0;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-size: 1.1rem;
	background-color: #414141;
  	color: #fff;
  	
  	@media only screen and ${breakpoints.device.sm} {
		font-size: 1.6rem;
	}
  
  	@media only screen and ${breakpoints.device.lg} {
	  	font-size: 1.4rem;
	}
`;

export const FooterLink = styled.a`
	margin: .5rem 0;
  	width: 100%;
  	text-align: center;
  	color: #fff;
`;

export const FooterAddress = styled.span`
	margin: .5rem 0;
	width: 100%;
  	text-align: center;
`;

export const FooterCopy = styled.span`
	padding: 1.5rem 2.5rem 1rem 2.5rem;
  	font-size: .9rem;
	font-style: italic;
  	text-align: center;
  	
    @media only screen and ${breakpoints.device.sm} {
        font-size: 1.2rem;
	}
  
  	@media only screen and ${breakpoints.device.lg} {
	  	font-size: 1rem;
	}
`;
