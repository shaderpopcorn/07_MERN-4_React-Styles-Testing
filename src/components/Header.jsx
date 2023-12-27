import {
  HeaderSection,
  Topbar,
  Logo,
  LogoButton,
  Headline,
  HorizontalLine,
  Bottombar,
  NavList,
  StyledLink,
} from "./Header.styled";

import { Outlet, Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <HeaderSection>
        <HorizontalLine />
        <Topbar>
          <LogoButton>
            <Link to="/">
              <Logo src="./assets/images/logo.png" alt="Shaderpopcorn Logo" />
            </Link>
          </LogoButton>
          <Headline data-testid="title">Shaderpopcorn</Headline>
        </Topbar>
        <Bottombar>
          <NavList>
            <StyledLink to="/about">About</StyledLink>
            <StyledLink to="/contact">Contact</StyledLink>
            <StyledLink to="/jobs">Jobs</StyledLink>
          </NavList>
        </Bottombar>
      </HeaderSection>
      <Outlet />
    </>
  );
};

export default Header;
