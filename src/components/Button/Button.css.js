import styled from 'styled-components';
import breakpoints from 'utils/breakpoints';
import theme from 'utils/theme';

export const BasicButton = styled.button`
  position: absolute;
  padding: 1rem 2rem;
  background-color: ${theme.colors.primary};
  color: #000;
  border: none;
  border-radius: 30px;
  font-size: 1.1rem;
  text-transform: uppercase;
  box-shadow: 2px 2px 10px 0 ${theme.colors.primary};
  transition: 0.3s;

  @media only screen and ${breakpoints.device.xs} {
    font-size: 1.4rem;
  }

  @media only screen and ${breakpoints.device.sm} {
    font-size: 2rem;
  }

  @media only screen and ${breakpoints.device.lg} {
    font-size: 1.8rem;
    box-shadow: none;

    &:hover {
      box-shadow: 2px 2px 10px 0 ${theme.colors.primary};
      cursor: pointer;
    }
  }
`;
