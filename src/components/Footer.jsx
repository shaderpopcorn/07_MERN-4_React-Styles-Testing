import { FooterSection, Bottombar, Copyright } from "./Footer.styled";

const Footer = () => {
  return (
    <>
      <FooterSection>
        <Bottombar>
          <Copyright data-testid="copyright">
            &copy; Copyright by Shaderpopcorn
          </Copyright>
        </Bottombar>
      </FooterSection>
    </>
  );
};

export default Footer;
