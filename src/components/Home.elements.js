import styled from "styled-components";

export const ImageSize = styled.div`
  img {
    max-width: 100%;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    padding-left: auto;
    padding-right: auto;
  }

  @media (min-width: 900px) {
    img {
      width: 750px;
    }
  }
`;
