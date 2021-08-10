import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faGlobeEurope } from '@fortawesome/free-solid-svg-icons';

import {
    FlagImage,
    LanguageIcon,
    LanguageItem,
    LanguageList,
    Logo,
    MenuIcon,
    MenuItem,
    MenuList,
    MenuOption,
    Wrapper,
} from './Navbar.css';

import logo from '../../assets/images/logo_small.png';
import germanFlag from '../../assets/images/gflag.svg';
import polandFlag from '../../assets/images/pflag.svg';
import englishFlag from '../../assets/images/eflag.svg';

const flags = [
    {id: 'de', flag: germanFlag},
    {id: 'pl', flag: polandFlag},
    {id: 'en', flag: englishFlag},
];

function Navbar({ items= [] }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLanguagesOpen, setIsLanguagesOpen] = useState(false);
    const { i18n } = useTranslation();

    const handleMenuOnChange = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const handleLanguageOnChange = () => {
        setIsLanguagesOpen(!isLanguagesOpen);
    }

    return (
        <>
            <Wrapper>
                <Logo src={logo} alt="logo"/>
                <LanguageIcon onClick={handleLanguageOnChange}>
                    <FontAwesomeIcon icon={faGlobeEurope} />
                </LanguageIcon>
                <MenuIcon onClick={handleMenuOnChange}>
                    {!isMenuOpen
                        ? <FontAwesomeIcon icon={faBars} />
                        : <FontAwesomeIcon icon={faTimes} />
                    }
                </MenuIcon>
            </Wrapper>
            <MenuList isMenuOpen={isMenuOpen}>
                {items.map(item => (
                    <MenuItem
                        key={item.to}
                        onClick={handleMenuOnChange}
                    >
                        <MenuOption to={item.to}>
                            {item.content}
                        </MenuOption>
                    </MenuItem>
                ))}
            </MenuList>
            <LanguageList areLanguagesOpen={isLanguagesOpen}>
                {flags.map(item => (
                    <LanguageItem key={item.id} onClick={handleLanguageOnChange}>
                        <FlagImage
                            src={item.flag}
                            alt={item.id}
                            onClick={() => i18n.changeLanguage(item.id.toLowerCase())}
                        />
                    </LanguageItem>
                ))}
            </LanguageList>
        </>
    );
}

export default Navbar;
