import styled from 'styled-components';
import breakpoints from "../../utils/breakpoints";

export const BasicButton = styled.button`
    position: absolute;
    bottom: 1.5rem;
    right: ${props => props.position === 'right' ? '6rem' : null};
    left: ${props => props.position === 'left' ? '6rem' : null};
    padding: .5rem 1rem;
    background-color: #ED184F;
    color: #fff;
    border: none;
    border-radius: 30px;
    font-size: 1rem;
    text-transform: uppercase;
    box-shadow: 2px 2px 10px 0 rgba(0,0,0,0.75);

	@media only screen and ${breakpoints.device.sm} {
		right: ${props => props.position === 'right' ? '16rem' : null};
		left: ${props => props.position === 'left' ? '16rem' : null};
      	padding: .8rem 1.4rem;
	  	font-size: 1.6rem;
	}
  
	@media only screen and ${breakpoints.device.lg} {
		right: ${props => props.position === 'right' ? '26rem' : null};
		left: ${props => props.position === 'left' ? '26rem' : null};
      	padding: 1rem 1.6rem;
	  	font-size: 1.8rem;
	}
`;
