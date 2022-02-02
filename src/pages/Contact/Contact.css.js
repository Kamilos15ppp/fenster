import styled from 'styled-components';
import breakpoints from 'utils/breakpoints';
import theme from 'utils/theme';

export const ContactWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: ${theme.fontSize.content.default};

  @media only screen and ${breakpoints.device.xs} {
    font-size: ${theme.fontSize.content.s};
  }

  @media only screen and ${breakpoints.device.sm} {
    font-size: ${theme.fontSize.content.m};
  }

  @media only screen and ${breakpoints.device.lg} {
    flex-direction: row-reverse;
    flex-wrap: wrap;
    justify-content: space-evenly;
    font-size: ${theme.fontSize.content.l};
  }
`;

export const ContactHeader = styled.h1`
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

export const LinksWrapper = styled.div`
  @media only screen and ${breakpoints.device.lg} {
    display: flex;
    flex-direction: column;
  }
`;

export const ContactLink = styled.a`
  display: flex;
  margin: 0.6rem 0;
  justify-content: center;
  align-items: center;
  color: #000;

  @media only screen and ${breakpoints.device.lg} {
    margin: 1rem 0;
  }
`;

export const ContactAddress = styled.span`
  display: flex;
  padding: 0 7rem;
  margin: 1rem 0;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media only screen and ${breakpoints.device.lg} {
    margin: 1.5rem 0;
  }
`;

export const ContactMap = styled.div`
  margin-top: 4rem;
  width: 28rem;
  height: 26rem;
  border-radius: 15px;

  @media only screen and ${breakpoints.device.xs} {
    width: 32rem;
    height: 28rem;
  }

  @media only screen and ${breakpoints.device.sm} {
    width: 66rem;
    height: 58rem;
  }

  @media only screen and ${breakpoints.device.lg} {
    width: 54rem;
    height: 46rem;
  }
`;

export const Icon = styled.span`
  margin-right: 1rem;
  font-size: 2rem;

  @media only screen and ${breakpoints.device.sm} {
    margin-right: 2rem;
    font-size: 3.4rem;
  }
`;

export const Map = styled.iframe`
  width: 100%;
  height: 100%;
  border: 0;
  border-radius: 15px;
`;
