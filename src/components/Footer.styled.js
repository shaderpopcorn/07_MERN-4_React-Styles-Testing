import styled from "styled-components";

export const FooterSection = styled.section`
  width: 100%;
  display: flex;
  height: calc(var(--headerHeight) / 2);
  background-color: var(--background);
  border-top: 2px solid var(--white);
  justify-content: center;
  position: fixed;
  bottom: 0;
`;

export const Bottombar = styled.div`
  width: 100%;
  max-width: 1200px;
  height: calc(var(--headerHeight) / 2);
  transform: translate(12vh, 0);
  display: flex;
  align-items: center;
  justify-content: start;
`;

export const Copyright = styled.p`
  font-size: calc(var(--headerHeight) / 6);
  color: var(--white);
`;
