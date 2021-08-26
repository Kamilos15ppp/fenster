import styled from 'styled-components';
import { Link } from "react-router-dom";
import breakpoints from "../../utils/breakpoints";

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
  
	@media only screen and ${breakpoints.device.xs} {
		height: 5rem;
	} 
  	
	@media only screen and ${breakpoints.device.sm} {
		height: 6rem;
	} 
  
	@media only screen and ${breakpoints.device.lg} {
		height: 5rem;
	}
`;

export const Logo = styled.img`
    width: 55%;

	@media only screen and ${breakpoints.device.xs} {
		width: 50%;
	}
  
  	@media only screen and ${breakpoints.device.sm} {
		width: 35%;
	}
  
	@media only screen and ${breakpoints.device.lg} {
		width: 15%;
	}
`;

export const MenuIcon = styled.div`
    position: absolute;
	top: 50%;
    right: 1rem;
    font-size: 1.8rem;
    color: #fff;
	transform: translateY(-50%);

	@media only screen and ${breakpoints.device.sm} {
	  	right: 1.5rem;
	  	font-size: 2.4rem;
	}
  
  	@media only screen and ${breakpoints.device.lg} {
	  	display: none;
	}
`;

export const LanguageIcon = styled.div`
	position: absolute;
	top: 50%;
	right: 4rem;
	font-size: 1.8rem;
	color: #fff;
	transform: translateY(-50%);
  	transition: .3s;
  
	@media only screen and ${breakpoints.device.sm} {
		right: 5.5rem;
		font-size: 2.4rem;
	}
  
  	@media only screen and ${breakpoints.device.lg} {
      	right: 4rem;
	  
		&:hover {
			color: #09a0cc;
          	cursor: pointer;
		}
	}
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
  
  	@media only screen and (orientation: landscape) {
	  	height: 75vh;
	}
  
	@media only screen and ${breakpoints.device.sm} {
      	height: 50vh;
      	top: ${props => props.isMenuOpen ? '6rem' : '-50vh'};
    }
  
	@media only screen and ${breakpoints.device.lg} {
      	top: 0;
	  	left: 36%;
	  	flex-direction: row;
      	height: 5rem;
	  	width: auto;
	  	z-index: 99;
	  
    }
`;

export const LanguageList = styled.ul`
    position: absolute;
    right: 2rem;
    display: flex;
    height: 6vh;
    width: 55vw;
    justify-content: center;
    align-items: center;
    text-align: center;
    top: ${props => props.areLanguagesOpen ? '4rem' : '-6vh' };
    background-color: ${({ theme }) => theme.colors.gray.normal};
    list-style: none;
    transition: .6s;
    z-index: 98;

	@media only screen and ${breakpoints.device.xs} {
		height: 7vh;
		width: 50vw;
		top: ${props => props.areLanguagesOpen ? '5rem' : '-7vh' };
	}

	@media only screen and (orientation: landscape) and ${breakpoints.device.xs} {
		height: 12vh;
	}
  
	@media only screen and ${breakpoints.device.sm} {
		height: 6vh;
		width: 30vw;
		top: ${props => props.areLanguagesOpen ? '6rem' : '-6vh' };
	}
  
	@media only screen and ${breakpoints.device.lg} {
      	right: 0;
      	height: 7vh;
		width: 15vw;
		top: ${props => props.areLanguagesOpen ? '5rem' : '-7vh' };
	}
`;

export const MenuItem = styled.li`
    padding-top: 1.5rem;

	@media only screen and (orientation: landscape) {
		padding-top: 1rem;
	}
  
  	@media only screen and ${breakpoints.device.lg} {
	  	padding-top: 0;
	  	margin: 0 1rem;
	}
`;

export const MenuOption = styled(Link)`
	color: #fff;
	font-size: 1.2rem;
	text-decoration: none;
	transition: .3s;
  
	@media only screen and ${breakpoints.device.sm} {
		font-size: 1.8rem;
	}
	
	@media only screen and ${breakpoints.device.lg} {
	  	font-size: 1.5rem;
	  
		&:hover {
			color: #09a0cc;
		}
	}
`;

export const LanguageItem = styled.li`
    padding-top: 0;
`;

export const FlagImage = styled.img`
    width: 55%;
    border-radius: 10%;
  	transition: .3s;
  
	@media only screen and ${breakpoints.device.sm} {
		width: 55%;
	}  
  
	@media only screen and ${breakpoints.device.lg} {
		width: 65%;
	  	
	  	&:hover {
		  	transform: scale(1.1);
		}
	}
`;
