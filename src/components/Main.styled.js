import styled from "styled-components";

const handleVisibility = (visibility) => {
  switch (visibility) {
    case "visible":
      return "visibility: visible";
    case "hidden":
      return "visibility: hidden";
  }
};

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
  ${({ visibility }) => handleVisibility(visibility)};
`;

export const Inner = styled.button`
  width: 100vw;
  height: 20vw;
  /* line-height: 18vw; */
  font-size: 11vw;
  font-family: sans-serif;
  white-space: nowrap;
  overflow: hidden;
  border-radius: 2vh;

  cursor: pointer;

  &:first-child {
    background-color: var(--background);
    border-right: 5px solid var(--yellow);
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
    border-left: 5px solid var(--white);
    border-top: 5px solid var(--white);
    border-bottom: 5px solid var(--white);
    color: var(--white);
    transform-origin: left;
    transform: perspective(10vw) rotateY(15deg);
  }

  &:hover {
    scale: 0.95;
  }

  span {
    position: absolute;
    transform: translate(0, -10vh);
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

export const PopUp = styled(Box)`
  width: 90%;
  max-width: 1100px;
  height: 80vh;
  transform: translate(0, 3%);
  background-color: var(--background);
  border: 2px solid var(--white);
  border-radius: 1vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PopUpLeft = styled(PopUp)``;

export const PopUpRight = styled(PopUp)``;

export const CloseButton = styled.button`
  width: 1vh;
  height: 1vh;
`;

export const Headline = styled.h3`
  color: var(--white);
`;

export const Text = styled.p`
  margin: 1vh 5vh;
  color: var(--white);
`;

export const LeftPopUp = styled(PopUp)``;

export const RightPopUp = styled(PopUp)``;

// export const ProjectsButton = styled.button`
//   background-color: var(--background);
//   width: 20vw;
//   height: 10vh;
//   border: 2px solid var(--white);
//   /* border-radius: 1vh; */
//   position: absolute;
//   top: 40%;
//   bottom: 0;
//   left: -40%;
//   right: 0;
//   margin: auto;
// `;
