import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import hexToRgb from './hex_to_rgb';

const Nav = styled.nav`
  ul {
    display: flex;
    justify-content: center;
    width: 100%;

    a {
      display: block;
      margin: 1rem;
      padding: 0.5rem 1rem;
      background: ${props => `${props.theme.point}`};
      border-radius: 0.3rem;
      font-weight: 700;
      color: #fff;
    }

    a:hover,
    .activeStyle {
      background: ${props => `rgba(${hexToRgb(props.theme.point)}, 0.5)`};
    }
  }
`;

const NavList = () => {
  return (
    <Nav>
      <ul>
        <li>
          <NavLink to="tickers" className={({ isActive }) => (isActive ? 'activeStyle' : undefined)}>
            Tickers
          </NavLink>
        </li>
        <li>
          <NavLink to="coins" className={({ isActive }) => (isActive ? 'activeStyle' : undefined)}>
            Coins
          </NavLink>
        </li>
      </ul>
    </Nav>
  );
};

export default NavList;
