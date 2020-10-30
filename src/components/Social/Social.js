import React from "react";
import SocialIcon from "./SocialIcon";
import { Icons } from "./Social.elements";
import { CenterFlex } from "../../globalStyles";

const Social = () => {
  return (
    <Icons>
      <SocialIcon link="https://github.com/taishnore" name="github" />
      <SocialIcon
        link="https://www.linkedin.com/in/taimur-shah-ab6ba3120/"
        name="linkedin"
      />
      <SocialIcon
        link="https://www.instagram.com/taimurshah/"
        name="instagram"
      />
    </Icons>
  );
};

export default Social;
