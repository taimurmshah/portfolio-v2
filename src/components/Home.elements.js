import styled from "styled-components";

export const ImageSize = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 35vw;
  }

  @media (max-width: 950px) {
    // img {
    //   max-width: 100%;
    //   height: auto;
    //   margin-left: auto;
    //   margin-right: auto;
    //   padding-left: auto;
    //   padding-right: auto;
    // }
  }
`;
