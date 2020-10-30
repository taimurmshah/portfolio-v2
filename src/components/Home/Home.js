import React from "react";
import Social from "../Social/Social";
import { Img } from "react-image";
import { ImageSize } from "./Home.elements";
import { CenterFlex } from "../../globalStyles";

const Home = () => {
  return (
    <>
      <CenterFlex>
        <h1>Taimur Shah</h1>
      </CenterFlex>
      <Social />
      <CenterFlex>
        <ImageSize>
          <Img src="christchurch_guitar.jpg" />
        </ImageSize>
      </CenterFlex>
    </>
  );
};

export default Home;
