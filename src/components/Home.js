import React from "react";
import { Img } from "react-image";
import { ImageSize } from "./Home.elements";

const Home = () => {
  return (
    <div>
      <ImageSize>
        <Img src="portfolio-pic.jpg" />
      </ImageSize>
    </div>
  );
};

export default Home;
