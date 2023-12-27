import { useState } from "react";
import {
  MainSection,
  Box,
  Inner,
  PopUpLeft,
  PopUpRight,
  CloseButton,
  Headline,
  Text,
} from "./Main.styled";

const Main = () => {
  const [boxActive, setBoxActive] = useState(true);
  const [leftActive, setLeftActive] = useState(false);
  const [rightActive, setRightActive] = useState(false);
  const handleLeftClick = () => {
    setBoxActive(!boxActive);
    setLeftActive(true);
  };

  const handleRightClick = () => {
    setBoxActive(!boxActive);
    setRightActive(true);
  };

  const handleCloseClickLeft = () => {
    setBoxActive(!boxActive);
    setLeftActive(false);
  };

  const handleCloseClickRight = () => {
    setBoxActive(!boxActive);
    setRightActive(false);
  };

  return (
    <MainSection>
      <Box data-testid="box" visibility={boxActive ? "visible" : "hidden"}>
        <Inner data-testid="left-button" onClick={handleLeftClick}>
          <span>2D+3D</span>
        </Inner>
        <Inner data-testid="right-button" onClick={handleRightClick}>
          <span>AR+VR</span>
        </Inner>
      </Box>
      <PopUpLeft
        data-testid="left-popup"
        visibility={leftActive ? "visible" : "hidden"}
      >
        <CloseButton
          data-testid="close-button-left"
          onClick={handleCloseClickLeft}
        >
          +
        </CloseButton>
        <Headline data-testid="left-headline">2D+3D Projects</Headline>
        <Text data-testid="left-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
          ducimus dolorum nesciunt excepturi facilis vero ipsa repudiandae
          provident enim iste optio alias soluta obcaecati asperiores,
          laboriosam consequuntur, eveniet dolores sequi, ratione illum quae!
          Reprehenderit, officiis aut soluta perferendis quos magni, mollitia
          cumque expedita obcaecati voluptate ullam illo porro, modi
          perspiciatis?
        </Text>
      </PopUpLeft>
      <PopUpRight
        data-testid="right-popup"
        visibility={rightActive ? "visible" : "hidden"}
      >
        <CloseButton
          data-testid="close-button-right"
          onClick={handleCloseClickRight}
        >
          +
        </CloseButton>
        <Headline data-testid="right-headline">AR+VR Projects</Headline>
        <Text data-testid="right-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
          ducimus dolorum nesciunt excepturi facilis vero ipsa repudiandae
          provident enim iste optio alias soluta obcaecati asperiores,
          laboriosam consequuntur, eveniet dolores sequi, ratione illum quae!
          Reprehenderit, officiis aut soluta perferendis quos magni, mollitia
          cumque expedita obcaecati voluptate ullam illo porro, modi
          perspiciatis?
        </Text>
      </PopUpRight>
    </MainSection>
  );
};

export default Main;
