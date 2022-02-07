import styled, { keyframes } from 'styled-components';
import breakpoints from 'utils/breakpoints';
import theme from 'utils/theme';

export const Wrapper = styled.div`
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

const scroll = keyframes`
  from { transform: translateX(-50%) translateY(0) }
  to { transform: translateX(-50%) translateY(-30%) }
`;

export const ScrollIndicator = styled.div`
  position: absolute;
  left: 50%;
  bottom: -40%;
  transform: translateX(-50%);
  animation: ${scroll} 0.8s cubic-bezier(0.61, -0.54, 1, 1) infinite alternate;
  cursor: pointer;
  z-index: 2;

  @media only screen and ${breakpoints.device.xs} {
    bottom: -30%;
  }

  @media only screen and ${breakpoints.device.sm} {
    bottom: -19%;
  }

  @media only screen and (orientation: landscape) and ${breakpoints.device.sm} {
    bottom: -13%;
  }

  @media only screen and ${breakpoints.device.lg} {
    bottom: -12%;
  }
`;

export const HeaderImage = styled.img`
  width: 100%;
  height: 40vh;

  @media only screen and (orientation: landscape) {
    height: 80vh;
  }
`;

export const HeaderImageDarker = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.color || ''};
`;

export const Header = styled.h1`
  font-size: ${theme.fontSize.header.default};
  margin-top: 10rem;
  margin-bottom: 5rem;
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

export const ArticleWrapper = styled.article`
  position: relative;
  padding: 0 2.4rem;
  margin-bottom: 6rem;
  font-size: ${theme.fontSize.content.default};
  text-align: justify;

  @media only screen and ${breakpoints.device.xs} {
    font-size: ${theme.fontSize.content.s};
  }

  @media only screen and ${breakpoints.device.sm} {
    padding: 0 7rem;
    font-size: ${theme.fontSize.content.m};
    line-height: 3rem;
  }

  @media only screen and ${breakpoints.device.lg} {
    padding: 0 14rem;
    font-size: ${theme.fontSize.content.l};
    line-height: 3.2rem;
  }
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  right: 40%;
  bottom: -10%;

  @media only screen and ${breakpoints.device.sm} {
    right: 35%;
  }

  @media only screen and ${breakpoints.device.lg} {
    right: 20%;
    bottom: -25%;
  }
`;

export const Image = styled.div`
  width: 100%;
  height: 40vh;
  background-image: ${(props) => `url(${props.image})` || ''};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media only screen and (orientation: landscape) {
    height: 80vh;
  }
`;

export const Slogan = styled.h3`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0 2rem;
  width: 100%;
  color: #fff;
  font-size: 2.5rem;
  line-height: 4rem;
  text-align: center;

  @media only screen and ${breakpoints.device.sm} {
    font-size: 4.5rem;
    line-height: 6rem;
  }

  @media only screen and ${breakpoints.device.lg} {
    font-size: 5rem;
  }
`;

export const CooperationLogosWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(auto-fill, 1fr);
  grid-gap: 2rem;

  @media only screen and ${breakpoints.device.sm} {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(auto-fill, 1fr);
    grid-gap: 6rem;
  }

  @media only screen and ${breakpoints.device.lg} {
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(auto-fill, 1fr);
    grid-gap: 6rem;
  }
`;
