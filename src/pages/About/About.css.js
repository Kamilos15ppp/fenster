import styled from 'styled-components';
import breakpoints from '../../utils/breakpoints';

import logotype from '../../assets/images/logotype_medium.png';
import signet from '../../assets/images/signet_medium.png';

export const AboutWrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const AboutHeader = styled.h1`
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

export const AboutInfo = styled.article`
    padding: 0 2.4rem;
    margin-bottom: 3rem;
    font-size: 1.2rem;
    text-align: justify;

	@media only screen and ${breakpoints.device.xs} {
		font-size: 1.4rem;
	}
	
	@media only screen and ${breakpoints.device.sm} {
		padding: 0 4rem;
		font-size: 1.8rem;
		line-height: 2.3rem;
	}
	
	@media only screen and ${breakpoints.device.lg} {
		padding: 0 6rem;
	  	font-size: 2rem;
	  	line-height: 2.5rem;
	}
`;

const ImageContainer = styled.div`
	background-position: center;
	background-size: contain;
	background-repeat: no-repeat;
	margin: 2rem 0;
	height: 6rem;
`;

export const AboutLogotype = styled(ImageContainer)`
	background-image: url(${logotype});
    width: 75%;
    
    @media only screen and ${breakpoints.device.lg} {
	  	width: 60%;
	}
`;

export const AboutSignet = styled(ImageContainer)`
	background-image: url(${signet});
	width: 35%;
	
	@media only screen and ${breakpoints.device.lg} {
	  	width: 45%;
	}
`;
