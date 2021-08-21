import styled from 'styled-components';
import breakpoints from '../../utils/breakpoints';

import headerImage from '../../assets/images/header.jpg';

export const HomepageWrapper = styled.section`
    display: flex;
    padding-bottom: 3rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    overflow: hidden;
`;

export const HeaderWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const HeaderImage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: calc(100vh - 4rem);
    background-image: url(${headerImage});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`;

export const HeaderImageDarker = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.75);
`;

export const CompanyTitle = styled.h2`
    font-size: 2.5rem;
    text-align: center;
    color: #fff;
    filter: brightness(100%);

	@media only screen and ${breakpoints.device.sm} {
		font-size: 3.5rem;
	}
	
	@media only screen and ${breakpoints.device.lg} {
	width: 100%;
		font-size: 4rem;
	}
`;

export const PersonTitle = styled.h2`
    font-size: 1.8rem;
    text-align: center;
    color: #fff;
    filter: brightness(100%);

	@media only screen and ${breakpoints.device.sm} {
	  	font-size: 2.4rem;
	}
	
	@media only screen and ${breakpoints.device.lg} {
	width: 100%;
		font-size: 3rem;
	}
`;

export const HomepageHeader = styled.h1`
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

export const ArticleWrapper = styled.article`
    position: relative;
    display: flex;
    margin: 3rem 0;
    justify-content: start;
    align-items: center;
    width: 100%;
    height: 12rem;
	
	@media only screen and ${breakpoints.device.sm} {
      	height: 20rem;
	}
	
	@media only screen and ${breakpoints.device.lg} {
      	height: 30rem;
	}
`;

export const HomepageImage = styled.div`
    position: absolute;
    display: flex;
    top: 0;
    right: ${props => props.position === 'right' ? '-1rem' : null};
    left: ${props => props.position === 'left' ? '-1rem' : null};
    width: 14rem;
    height: 12rem;
    justify-content: center;
    align-items: center;
    background-image: url(${props => props.image});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 20px;
    box-shadow: 2px 2px 15px 0 rgba(0,0,0,0.75);
    z-index: -1;

	@media only screen and ${breakpoints.device.sm} {
      	width: 26rem;
      	height: 20rem;
	}
	
	@media only screen and ${breakpoints.device.lg} {
		width: 40rem;
		height: 30rem;
	}
`;

export const HomepageImageDarker = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    background-color: rgba(0,0,0,0.55);
`;

export const HomepageImageHeader = styled.h3`
    font-size: 1.7rem;
    text-align: center;
    color: #fff;
    filter: brightness(100%);

	@media only screen and ${breakpoints.device.sm} {
		font-size: 3rem;
	}
	
	@media only screen and ${breakpoints.device.lg} {
      	font-size: 4rem;
    }
`;
