import styled from 'styled-components';
import { Link } from 'react-router-dom';
import theme from 'utils/theme';
import breakpoints from 'utils/breakpoints';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  padding-left: 2.5rem;
  height: 6rem;
  justify-content: start;
  align-items: center;
  background-color: ${theme.colors.secondary};
  z-index: 99;

  @media only screen and ${breakpoints.device.xs} {
    height: 7rem;
  }

  @media only screen and (orientation: landscape) and ${breakpoints.device.xs} {
    height: 5rem;
  }

  @media only screen and ${breakpoints.device.sm} {
    height: 8rem;
  }

  @media only screen and ${breakpoints.device.lg} {
    height: 8rem;
  }
`;

export const Logo = styled.img`
  width: 55%;

  @media only screen and ${breakpoints.device.xs} {
    width: 50%;
  }

  @media only screen and (orientation: landscape) and ${breakpoints.device.xs} {
    width: 30%;
  }

  @media only screen and ${breakpoints.device.sm} {
    width: 35%;
  }

  @media only screen and (orientation: landscape) and ${breakpoints.device.sm} {
    width: 25%;
  }

  @media only screen and ${breakpoints.device.lg} {
    width: 15%;
  }
`;

export const MenuIcon = styled.div`
  position: absolute;
  top: 60%;
  right: 2rem;
  transform: translateY(-50%);
  cursor: pointer;

  @media only screen and ${breakpoints.device.xs} {
    right: 2.5rem;
  }

  @media only screen and (orientation: landscape) and ${breakpoints.device.xs} {
    right: 3rem;
  }

  @media only screen and ${breakpoints.device.sm} {
    right: 3.5rem;
  }

  @media only screen and ${breakpoints.device.lg} {
    display: none;
  }
`;

export const MenuList = styled.ul`
  position: absolute;
  display: flex;
  height: 45vh;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: ${(props) => (props.isMenuOpen ? '6rem' : '-55vh')};
  background-color: ${theme.colors.secondary};
  list-style: none;
  transition: 0.8s;
  z-index: 98;

  @media only screen and ${breakpoints.device.xs} {
    height: 40vh;
    top: ${(props) => (props.isMenuOpen ? '6rem' : '-40vh')};
  }

  @media only screen and (orientation: landscape) and ${breakpoints.device.xs} {
    height: 50vh;
    top: ${(props) => (props.isMenuOpen ? '5rem' : '-50vh')};
  }

  @media only screen and ${breakpoints.device.sm} {
    height: 25vh;
    top: ${(props) => (props.isMenuOpen ? '8rem' : '-25vh')};
  }

  @media only screen and (orientation: landscape) and ${breakpoints.device.sm} {
    height: 55vh;
    top: ${(props) => (props.isMenuOpen ? '8rem' : '-55vh')};
  }

  @media only screen and ${breakpoints.device.lg} {
    top: 0;
    left: 45rem;
    flex-direction: row;
    height: 8rem;
    width: auto;
    z-index: 99;
  }
`;

export const MenuItem = styled.li`
  margin: 0.7rem 0;
  width: 100%;
  text-align: center;

  @media only screen and (orientation: landscape) and ${breakpoints.device.xs} {
    margin: 0;
  }

  @media only screen and ${breakpoints.device.lg} {
    margin: 0 1rem;
    width: 15rem;
  }
`;

export const MenuOption = styled(Link)`
  display: block;
  padding: 1rem 0;
  width: 100%;
  color: #fff;
  font-size: 2.1rem;
  text-decoration: none;
  transition: 0.3s;

  @media only screen and ${breakpoints.device.xs} {
    font-size: 2.3rem;
  }

  @media only screen and (orientation: landscape) and ${breakpoints.device.xs} {
    font-size: 1.5rem;
  }

  @media only screen and ${breakpoints.device.sm} {
    font-size: 2.3rem;
  }

  @media only screen and (orientation: landscape) and ${breakpoints.device.sm} {
    font-size: 3rem;
  }

  @media only screen and ${breakpoints.device.lg} {
    display: inline-block;
    padding: 1rem 1rem;
    font-size: 2.6rem;

    &:hover {
      color: ${theme.colors.primary};
    }
  }
`;
