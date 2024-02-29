import {
  HeaderSection,
  Topbar,
  Logo,
  LogoButton,
  Headline,
  HorizontalLine,
  Bottombar,
  NavList,
  NavLink,
} from "./Header.styled";

// import { Outlet, Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <HeaderSection data-testid="header-section">
        <HorizontalLine data-testid="horizontal-line" />
        <Topbar data-testid="topbar">
          <LogoButton to="/">
            <Logo src="./assets/images/logo.png" alt="Shaderpopcorn Logo" />
          </LogoButton>
          <Headline data-testid="title">Shaderpopcorn</Headline>
        </Topbar>
        <Bottombar data-testid="bottombar">
          <NavList data-testid="nav-list">
            <NavLink role="listitem" to="/about">
              About
            </NavLink>
            <NavLink role="listitem" to="/contact">
              Contact
            </NavLink>
            <NavLink role="listitem" to="/jobs">
              Jobs
            </NavLink>
          </NavList>
        </Bottombar>
      </HeaderSection>
      {/* <Outlet /> */}
    </>
  );
};

export default Header;
