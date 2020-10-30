import React from "react";
import { Img } from "react-image";
import { ImageSize } from "./Home.elements";
import { CenterFlex } from "../globalStyles";

const Home = () => {
  return (
    <>
      <CenterFlex>
        <h1>Taimur Shah</h1>
      </CenterFlex>

      <CenterFlex>
        <ImageSize>
          <Img src="christchurch_guitar.jpg" />
        </ImageSize>
      </CenterFlex>
    </>
  );
};

export default Home;
