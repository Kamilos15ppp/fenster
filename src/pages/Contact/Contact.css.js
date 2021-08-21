import styled from 'styled-components';
import breakpoints from '../../utils/breakpoints';

export const ContactWrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  	font-size: 1.2rem;

	@media only screen and ${breakpoints.device.xs} {
		font-size: 1.4rem;
	}
  
  	@media only screen and ${breakpoints.device.sm} {
	  	font-size: 1.8rem;
	}
  
  	@media only screen and ${breakpoints.device.lg} {
	  	font-size: 2rem;
	  	flex-direction: row-reverse;
	  	flex-wrap: wrap;
	  	justify-content: space-evenly;
	}
`;

export const ContactHeader = styled.h1`
    font-size: 2rem;
    margin-bottom: 3rem;
    text-align: center;

	@media only screen and ${breakpoints.device.xs} {
		font-size: 2.4rem;
	}
  	
	@media only screen and ${breakpoints.device.sm} {
		font-size: 3.2rem;
	}
  
	@media only screen and ${breakpoints.device.lg} {
      	width: 100%;
		font-size: 3.4rem;
	}
`;

export const LinksWrapper = styled.div`
	@media only screen and ${breakpoints.device.lg} {
		display: flex;
	  	flex-direction: column;
	}
`;

export const ContactLink = styled.a`
	display: flex;
	margin: .6rem 0;
	justify-content: center;
	align-items: center;
	color: #000;

	@media only screen and ${breakpoints.device.lg} {
	  	margin: 1rem 0;
	}
`;

export const ContactAddress = styled.span`
	display: flex;
	margin: .6rem 0;
	justify-content: center;
	align-items: center;

	@media only screen and ${breakpoints.device.lg} {
	  	margin: 1rem 0;
	}
`;

export const ContactMap = styled.div`
	margin-top: 4rem;
  	width: 18rem;
  	height: 16rem;
  	border-radius: 15px;

	@media only screen and ${breakpoints.device.xs} {
	  	width: 20rem;
	  	height: 18rem;
	}
  
	@media only screen and ${breakpoints.device.sm} {
	  	width: 42rem;
	  	height: 36rem;
	}  
  
	@media only screen and ${breakpoints.device.lg} {
	  	width: 50rem;
	  	height: 40rem;
	}
`;

export const Icon = styled.span`
	margin-right: 2rem;
  	font-size: 2rem;
`;

export const Map = styled.iframe`
	width: 100%;
	height: 100%;
	border: 0;
	border-radius: 15px;
`;
