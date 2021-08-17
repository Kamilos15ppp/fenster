import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    padding-left: 1.5rem;
    height: 4rem;
    justify-content: start;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.gray.normal};
    font-size: 1.2rem;
    z-index: 99;
`;

export const Logo = styled.img`
    width: 50%;
`;

export const MenuIcon = styled.div`
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 1.8rem;
    color: #fff;
`;

export const LanguageIcon = styled.div`
      position: absolute;
      top: 1rem;
      right: 4rem;
      font-size: 1.8rem;
      color: #fff;
`;

export const MenuList = styled.ul`
    position: absolute;
    display: flex;
    height: 55vh;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: ${props => props.isMenuOpen ? '4rem' : '-55vh' };
    background-color: ${({ theme }) => theme.colors.gray.normal};
    list-style: none;
    transition: .8s;
    z-index: 98;
`

export const LanguageList = styled.ul`
    position: absolute;
    right: 2rem;
    display: flex;
    height: 10vh;
    width: 60vw;
    justify-content: center;
    align-items: center;
    text-align: center;
    top: ${props => props.areLanguagesOpen ? '4rem' : '-10vh' };
    background-color: ${({ theme }) => theme.colors.gray.normal};
    list-style: none;
    transition: .6s;
    z-index: 98;
`

export const MenuItem = styled.li`
    padding-top: 1.5rem;
`;

export const MenuOption = styled(Link)`
  color: #ffffff;
  font-size: 1.2rem;
  text-decoration: none;
`;

export const LanguageItem = styled.li`
    padding-top: 0;
`;

export const FlagImage = styled.img`
    width: 50%;
    border-radius: 10%;
`;
