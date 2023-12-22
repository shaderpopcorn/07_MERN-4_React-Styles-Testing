import {
  HeaderSection,
  Topbar,
  Logo,
  LogoButton,
  Headline,
  HorizontalLine,
  Bottombar,
  NavList,
  Link,
} from "./Header.styled";

const Header = () => {
  return (
    <HeaderSection>
      <HorizontalLine />
      <Topbar>
        <LogoButton>
          <Logo src="./assets/images/logo.png" alt="Shaderpopcorn Logo" />
        </LogoButton>
        <Headline data-testid="title">Shaderpopcorn</Headline>
      </Topbar>
      <Bottombar>
        <NavList>
          <Link>About</Link>
        </NavList>
        <NavList>
          <Link>Contact</Link>
        </NavList>
        <NavList>
          <Link>Jobs</Link>
        </NavList>
      </Bottombar>
    </HeaderSection>
  );
};

export default Header;
