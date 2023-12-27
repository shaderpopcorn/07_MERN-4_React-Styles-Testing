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
    setLeftActive(!leftActive);
  };

  const handleRightClick = () => {
    setBoxActive(!boxActive);
    setRightActive(!rightActive);
  };

  return (
    <MainSection>
      <Box data-testid="box" visibility={boxActive ? "visible" : "hidden"}>
        <Inner data-testid="left-side" onClick={handleLeftClick}>
          <span>3D+2D</span>
        </Inner>
        <Inner data-testid="right-side" onClick={handleRightClick}>
          <span>VR+AR</span>
        </Inner>
      </Box>
      <PopUpLeft visibility={leftActive ? "visible" : "hidden"}>
        <CloseButton>X</CloseButton>
        <Headline>3D+2D Projects</Headline>
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
          ducimus dolorum nesciunt excepturi facilis vero ipsa repudiandae
          provident enim iste optio alias soluta obcaecati asperiores,
          laboriosam consequuntur, eveniet dolores sequi, ratione illum quae!
          Reprehenderit, officiis aut soluta perferendis quos magni, mollitia
          cumque expedita obcaecati voluptate ullam illo porro, modi
          perspiciatis?
        </Text>
      </PopUpLeft>
      <PopUpRight visibility={rightActive ? "visible" : "hidden"}>
        <Headline>VR+AR Projects</Headline>
        <Text>
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
