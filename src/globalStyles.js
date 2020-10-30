import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
     * {
        padding: 2px;
        // padding: 0;
        margin: 0;
        box-sizing: border-box;
      }
`;

export const CenterFlex = styled.div`
  display: flex;
  justify-content: center;
`;

export default GlobalStyle;
