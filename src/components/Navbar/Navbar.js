import React, { useRef, useState } from 'react';
import { gsap } from 'gsap';

import {
  Logo,
  MenuIcon,
  MenuItem,
  MenuList,
  MenuOption,
  Wrapper,
} from './Navbar.css';

import logo from 'assets/images/logo_small.png';
import { ReactComponent as Menu } from 'assets/images/menu.svg';

function Navbar({ items = [] }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const menuAnimation = (char, char2, alpha, duration) => {
    const [elements] = menuRef.current.children;
    const line1 = elements.getElementById('Line_1');
    const line2 = elements.getElementById('Line_2');
    const line3 = elements.getElementById('Line_3');

    gsap.to(line1, {
      duration: `${duration}`,
      rotation: `${char}=45`,
      x: `${char}=10`,
    });
    gsap.to(line2, {
      duration: `${duration}`,
      x: `${char2}=300`,
      autoAlpha: `${alpha}`,
    });
    gsap.to(line3, {
      duration: `${duration}`,
      rotation: `${char2}=45`,
      x: `${char}=10`,
    });
  };

  const handleMenuOnChange = () => {
    if (!isMenuOpen) menuAnimation('+', '-', 0, 0.5);
    else menuAnimation('-', '+', 1, 0.5);
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <Wrapper>
        <Logo src={logo} alt="logo" />
        <MenuIcon ref={menuRef} onClick={handleMenuOnChange}>
          <Menu />
        </MenuIcon>
      </Wrapper>
      <MenuList isMenuOpen={isMenuOpen}>
        {items.map(({ id, to, content }) => (
          <MenuItem key={id}>
            <MenuOption to={to} onClick={handleMenuOnChange}>
              {content}
            </MenuOption>
          </MenuItem>
        ))}
      </MenuList>
    </nav>
  );
}

export default Navbar;
