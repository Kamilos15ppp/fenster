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

export const GalleryImg = styled.img`
	width: 90%;
	border-radius: 15px;
	place-self: center;
`;
