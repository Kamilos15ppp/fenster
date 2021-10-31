import styled from 'styled-components';
import breakpoints from "../../utils/breakpoints";

export const GalleryWrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

export const GalleryHeader = styled.h1`
    font-size: 2rem;
    text-align: center;
`;

export const ImagesWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 1fr);
    grid-gap: 2rem;
    padding: 3rem;

		@media only screen and ${breakpoints.device.sm} {
		  	margin-top: 2rem;
			grid-template-columns: repeat(2, 1fr);
			grid-template-rows: repeat(3, 1fr);
			grid-gap: 3rem;
		}
  
		@media only screen and ${breakpoints.device.lg} {
			grid-template-columns: repeat(3, 1fr);
			grid-template-rows: repeat(2, 1fr);
			grid-gap: 5rem;
		}
`;

export const ImgContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const GalleryImg = styled.img`
	width: ${({ isBig }) => isBig ? '70%' : '100%'};
	border-radius: 15px;
	place-self: center;
	transition: .4s;
    box-shadow: 5px 5px 30px -5px #000000;
	
	@media only screen and ${breakpoints.device.sm} {
        width: ${({ isBig }) => isBig ? '75%' : '95%'};
	    	
	    &:hover {
	        transform: scale(1.1);
	        filter: brightness(85%);
	    }
    }
    
	@media only screen and ${breakpoints.device.lg} {
        width: ${({ isBig }) => isBig ? '70%' : '95%'};
    }
`;

export const GalleryVideo = styled.video`
  padding: 2rem;
  border-radius: 60px;
`;
