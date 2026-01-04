
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    height: 105px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 12;
    padding: 0 50px;
    padding-top: 20px;
`;

export const NavLink = styled(Link)`
    position: relative;
    color: #000;
    font-size: 48px;
    font-weight: 400;
    text-decoration: none;
    padding: 0 1rem;
    line-height: 0.67;
    cursor: pointer;
`;

export const CenterLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transform: translateX(-30px);

  span {
    line-height: .67;
    text-align: left;
  }
`;

export const NavMenu = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, auto);
  column-gap: 30vw;
  align-items: start;

  /* shared indicator */
  &::before {
    content: "";
    position: absolute;
    top: -15px;
    width: 63px;
    height: 70px;
    background: #d3d3d3;
    transform: translateX(-50%);
    transition: left 600ms cubic-bezier(0.4, 0, 0.1, 1);
    left: 50%; /* default */
  }

  /* contact active */
  &:has(a.active:nth-child(1))::before {
    left: 4.2%;
  }

  /* work active */
  &:has(a.active:nth-child(2))::before {
    left: 50%;
  }

  /* about active */
  &:has(a.active:nth-child(3))::before {
    left: 95%;
  }
`;