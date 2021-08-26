import React, { useRef ,useState } from 'react';
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeEurope } from '@fortawesome/free-solid-svg-icons';
import { gsap } from 'gsap';

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
import { ReactComponent as Menu } from '../../assets/images/menu.svg';

const flags = [
    {id: 'de', flag: germanFlag},
    {id: 'pl', flag: polandFlag},
    {id: 'en', flag: englishFlag},
];

function Navbar({ items= [] }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLanguagesOpen, setIsLanguagesOpen] = useState(false);
    const { i18n } = useTranslation();
    const menuRef = useRef(null);
    const langRef = useRef(null);

    const menuAnimtion = (char, char2, alpha, duration) => {
        const [elements] = menuRef.current.children;
        const line1 = elements.getElementById('Line_1');
        const line2 = elements.getElementById('Line_2');
        const line3 = elements.getElementById('Line_3');

        gsap.to(line1, { duration: `${duration}`, rotation: `${char}=45`, x: `${char}=10` });
        gsap.to(line2, { duration: `${duration}`,  x: `${char2}=300`, autoAlpha: `${alpha}` });
        gsap.to(line3, { duration: `${duration}`, rotation: `${char2}=45`, x: `${char}=10` });
    };

    const langAnimation = (color, duration) => {
        gsap.to(langRef.current, { duration: `${duration}`, color: `${color}` });
    };

    const handleMenuOnChange = () => {
        if (!isMenuOpen) menuAnimtion('+', '-', 0, .5);
        else menuAnimtion('-', '+', 1, .5);
        setIsMenuOpen(!isMenuOpen);
    }

    const handleLanguageOnChange = () => {
        if(!isLanguagesOpen) langAnimation('#09a0cc', 1);
        else langAnimation('#fff', .6);
        setIsLanguagesOpen(!isLanguagesOpen);
    }

    return (
        <nav>
            <Wrapper>
                <Logo src={logo} alt="logo"/>
                <LanguageIcon
                    ref={langRef}
                    onClick={handleLanguageOnChange}>
                    <FontAwesomeIcon
                        icon={faGlobeEurope} />
                </LanguageIcon>
                <MenuIcon
                    ref={menuRef}
                    onClick={handleMenuOnChange}
                >
                    <Menu />
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
                    <LanguageItem
                        key={item.id}
                        onClick={handleLanguageOnChange}
                    >
                        <FlagImage
                            src={item.flag}
                            alt={item.id}
                            onClick={() =>
                                i18n.changeLanguage(item.id.toLowerCase())}
                        />
                    </LanguageItem>
                ))}
            </LanguageList>
        </nav>
    );
}

export default Navbar;
