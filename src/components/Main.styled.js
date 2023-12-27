import styled from "styled-components";

export const MainSection = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Box = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Inner = styled.div`
  width: 100vw;
  height: 20vw;
  line-height: 18vw;
  font-size: 11vw;
  font-family: sans-serif;
  white-space: nowrap;
  overflow: hidden;

  &:first-child {
    background-color: var(--background);
    /* border-right: 1px solid var(--yellow); */
    border-left: 5px solid var(--yellow);
    border-top: 5px solid var(--yellow);
    border-bottom: 5px solid var(--yellow);
    color: var(--yellow);
    transform-origin: right;
    transform: perspective(10vw) rotateY(-15deg);
  }

  &:first-child span {
    animation-delay: 3.5s;
    left: -100%;
  }

  &:last-child {
    background-color: var(--background);
    border-right: 5px solid var(--white);
    border-left: 1px solid var(--white);
    border-top: 5px solid var(--white);
    border-bottom: 5px solid var(--white);
    color: var(--white);
    transform-origin: left;
    transform: perspective(10vw) rotateY(15deg);
  }

  span {
    position: absolute;
    animation: marquee 7s linear infinite;
  }

  @keyframes marquee {
    from {
      left: 100%;
    }

    to {
      left: -100%;
    }
  }
`;
