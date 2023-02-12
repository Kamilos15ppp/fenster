import styled from 'styled-components';
import breakpoints from 'utils/breakpoints';
import theme from 'utils/theme';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MainHeader = styled.h1`
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

export const Paragraph = styled.p`
  padding: 0 2.4rem;
  margin-bottom: 1rem;
  width: 100%;
  font-size: calc(${theme.fontSize.content.default});
  text-align: justify;

  @media only screen and ${breakpoints.device.xs} {
    font-size: ${theme.fontSize.content.s};
  }

  @media only screen and ${breakpoints.device.sm} {
    padding: 0 7rem;
    font-size: calc(${theme.fontSize.content.m} - 0.5rem);
    line-height: 2.4rem;
  }

  @media only screen and ${breakpoints.device.lg} {
    padding: 0 14rem;
    font-size: calc(${theme.fontSize.content.l});
  }
`;
