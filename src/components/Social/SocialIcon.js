import React from "react";

const SocialIcon = ({ link, name }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img
        src={`${window.location.origin}/icons/${name}.svg`}
        alt={`${name} logo`}
      />
    </a>
  );
};

export default SocialIcon;
