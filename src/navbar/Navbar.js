import React from "react";
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";
import { NavHashLink as Link } from "react-router-hash-link";
import Brand from "./Brand";
import BurgerMenu from "./BurgerMenu";
import CollapseMenu from "./CollapseMenu";
import { navItems } from "../../constants/NavItems";

const Navbar = (props) => {
  const barAnimation = useSpring({
    from: { transform: "translate3d(0, -10rem, 0)" },
    transform: "translate3d(0, 0, 0)",
  });

  const linkAnimation = useSpring({
    from: { transform: "translate3d(30px, 30px, 30px)", opacity: 0 },
    to: { transform: "translate3d(0, 0, 0)", opacity: 1 },
    delay: 500,
    config: config.wobbly,
  });

  return (
    <>
      <NavBar style={barAnimation}>
        <div className="FlexContainer">
          <Brand />
          <NavLinks style={linkAnimation}>

            {navItems.map((item) => (
              <Link
                activeClass="active"
                to={item.to}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {item.title}
              </Link>
            ))}
          </NavLinks>
          <BurgerWrapper>
            <BurgerMenu
              navbarState={props.navbarState}
              handleNavbar={props.handleNavbar}
            />
          </BurgerWrapper>
        </div>
      </NavBar>

      <CollapseMenu
        navbarState={props.navbarState}
        handleNavbar={props.handleNavbar}
      />
    </>
  );
};

export default Navbar;

const NavBar = styled(animated.nav)`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: #66c9ba;
  z-index: 1;
  font-size: 1.2rem;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`;

const NavLinks = styled(animated.ul)`
  // justify-self: end;
  list-style-type: none;
  margin: auto 0;

  & a {
    color: #ffffff;
    // text-transform: uppercase;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #fdcb6e;
      border-bottom: 0px solid #fdcb6e;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const BurgerWrapper = styled.div`
  margin: auto 0;

  @media (min-width: 769px) {
    display: none;
  }
`;