import styled from 'styled-components';
import breakpoints from "../../utils/breakpoints";

export const OfferWrapper = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const CategoryWrapper = styled.div`
	margin-bottom: 2rem;
`;

export const OfferCategory = styled.h1`
	font-size: 2rem;
	margin: 1rem 0 2rem 0;
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

export const OptionWrapper = styled.div`
	margin: 1rem 0;
`;

export const OptionHeader = styled.h2`
	font-size: 1.4rem;
	text-align: center;
	
	@media only screen and ${breakpoints.device.xs} {
		font-size: 1.6rem;
	}
	
	@media only screen and ${breakpoints.device.sm} {
		font-size: 2rem;
	}
	
	@media only screen and ${breakpoints.device.lg} {
		width: 100%;
		font-size: 2.4rem;
	}
`;

export const OptionDescription = styled.p`
  	margin: .5rem 0;
	font-size: 1rem;
  	text-align: center;

	@media only screen and ${breakpoints.device.xs} {
	  	font-size: 1.2rem;
	}
	
	@media only screen and ${breakpoints.device.sm} {
		font-size: 1.6rem;
	}
	
	@media only screen and ${breakpoints.device.lg} {
		//width: 100%;
		font-size: 2rem;
	}
`;
