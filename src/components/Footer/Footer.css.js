import { Link } from 'react-router-dom';
import styled from 'styled-components';
import breakpoints from 'utils/breakpoints';
import theme from 'utils/theme';

export const FooterWrapper = styled.footer`
  display: flex;
  margin-top: 5rem;
  padding: 2rem 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  background-color: #414141;
  color: #fff;

  @media only screen and ${breakpoints.device.xs} {
    font-size: 1.5rem;
  }

  @media only screen and ${breakpoints.device.sm} {
    font-size: 1.9rem;
  }

  @media only screen and ${breakpoints.device.lg} {
    font-size: 2.2rem;
  }
`;

export const FooterLink = styled.a`
  margin: 0.7rem 0;
  width: 100%;
  text-align: center;
  color: #fff;
  transition: 0.3s;

  &:hover {
    color: ${theme.colors.primary};
  }
`;

export const FooterHref = styled(Link)`
  margin: 0.7rem 0;
  width: 100%;
  text-align: center;
  color: #fff;
  transition: 0.3s;

  &:hover {
    color: ${theme.colors.primary};
  }
`;

export const FooterAddress = styled.span`
  margin: 0.7rem 0;
  width: 100%;
  text-align: center;
`;

export const FooterCopy = styled.span`
  padding: 1.5rem 2.5rem 1rem 2.5rem;
  font-size: 1.1rem;
  font-style: italic;
  text-align: center;

  @media only screen and ${breakpoints.device.sm} {
    font-size: 1.5rem;
  }

  @media only screen and ${breakpoints.device.lg} {
    font-size: 1.6rem;
  }
`;
