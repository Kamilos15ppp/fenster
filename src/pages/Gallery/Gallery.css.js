import styled from 'styled-components';
import breakpoints from 'utils/breakpoints';
import theme from 'utils/theme';

export const GalleryWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const GalleryHeader = styled.h1`
  font-size: ${theme.fontSize.header.default};
  margin-bottom: 3rem;
  width: 100%;
  text-align: center;

  @media only screen and ${breakpoints.device.xs} {
    font-size: ${theme.fontSize.header.s};
  }

  @media only screen and ${breakpoints.device.sm} {
    font-size: ${theme.fontSize.header.m};
  }

  @media only screen and ${breakpoints.device.lg} {
    font-size: ${theme.fontSize.header.l};
  }
`;

export const ImagesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(auto-fill, 1fr);
  grid-gap: 3rem;
  padding: 2rem 4rem;

  @media only screen and ${breakpoints.device.sm} {
    padding: 2rem 6rem;
    margin-top: 3rem;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 3rem;
  }

  @media only screen and ${breakpoints.device.lg} {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 5rem;
    padding: 7rem 14rem;
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GalleryImg = styled.img`
  width: ${({ isBig }) => (isBig ? '80%' : '95%')};
  border-radius: 15px;
  place-self: center;
  transition: 0.4s;
  box-shadow: 5px 5px 30px -5px #000000;

  @media only screen and ${breakpoints.device.sm} {
    width: ${({ isBig }) => (isBig ? '75%' : '95%')};

    &:hover {
      transform: scale(1.1);
      filter: brightness(85%);
    }
  }

  @media only screen and ${breakpoints.device.lg} {
    width: ${({ isBig }) => (isBig ? '70%' : '95%')};
  }
`;

export const GalleryVideo = styled.video`
  padding: 2rem;
  width: 25rem;
  height: 42rem;
  border-radius: 60px;
  place-self: center;
`;
