import styled from "styled-components";

export const HeaderSection = styled.section`
  position: fixed;
  width: 100%;
  height: var(--headerHeight);
  background-color: var(--background);
  display: flex;
  justify-content: center;
`;

export const HorizontalLine = styled.hr`
  position: absolute;
  padding: 0;
  margin: 0;
  transform: translate(0, calc(var(--headerHeight) / 2));
  border: 1px solid var(--white);
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

export const Topbar = styled.div`
  width: 100%;
  max-width: 1200px;
  position: absolute;
  height: calc(var(--headerHeight) / 2);
`;

export const LogoButton = styled.button`
  position: absolute;
  transform: translate(
    calc(var(--headerHeight) / 10),
    calc(var(--headerHeight) / 10)
  );
  width: calc(var(--headerHeight) / 1.25);
  height: calc(var(--headerHeight) / 1.25);
  background-color: var(--white);
  border-radius: 50%;
  border: none;
`;

export const Logo = styled.img`
  width: calc(var(--headerHeight) / 1.5);
  height: calc(var(--headerHeight) / 1.5);
`;

export const Headline = styled.h3`
  color: var(--yellow);
  transform: translate(12vh, calc(var(--headerHeight) / -6));
  font-size: calc(var(--headerHeight) / 4);
`;

export const Bottombar = styled.div`
  width: 100%;
  max-width: 1200px;
  height: calc(var(--headerHeight) / 2);
  transform: translate(0, calc(var(--headerHeight) / 2));
  display: flex;
  align-items: center;
  justify-content: start;
`;

export const NavList = styled.ul`
  transform: translate(12vh, 0);
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const Link = styled.li`
  margin-right: 3vh;
  color: var(--white);
  font-weight: 700;
  font-size: calc(var(--headerHeight) / 5);
  cursor: pointer;

  &:hover {
    border-bottom: 1px solid var(--background);
  }

  &:checked {
    border-bottom: 1px solid var(--background);
  }
`;
