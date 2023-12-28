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
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/jobs">Jobs</NavLink>
          </NavList>
        </Bottombar>
      </HeaderSection>
    </>
  );
};

export default Header;
