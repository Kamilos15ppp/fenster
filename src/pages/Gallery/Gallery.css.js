import styled from 'styled-components';

import img1 from '../../assets/images/1.jpg';
import img2 from '../../assets/images/2.jpg';
import img3 from '../../assets/images/3.jpg';

const images = [img1, img2, img3];

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
`;

export const GalleryImage = styled.div`
    background-image: ${props => props.num ? `url(${images[props.num]})` : null};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    place-self: center;
    margin: 2rem 0;
    width: 17rem;
    height: 13rem;
    border-radius: 15px;
`;
