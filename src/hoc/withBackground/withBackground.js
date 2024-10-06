
import React from 'react'; 
import useBackground from "../../hooks/useBackground";

const withBackground = (Element, color) => {
  return ({ setMainBackground }) => {
    useBackground({ setMainBackground, color });
    return <Element />;
  };
};

export default withBackground;