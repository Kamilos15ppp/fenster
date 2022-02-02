import styled from 'styled-components';
import breakpoints from 'utils/breakpoints';
import theme from 'utils/theme';

import logotype from 'assets/images/logotype_medium.png';
import signet from 'assets/images/signet_medium.png';

export const AboutWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AboutHeader = styled.h1`
  font-size: ${theme.fontSize.header.default};
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

export const AboutInfo = styled.article`
  padding: 0 2.4rem;
  margin-bottom: 3rem;
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

const ImageContainer = styled.div`
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  margin: 3rem 0;
  height: 7rem;
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
