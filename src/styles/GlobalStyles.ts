import { createGlobalStyle } from "styled-components";
import { Theme } from "./Theme";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing:border-box
    }
    body{
        /* background: #000; */
    }
    .error{
  color:rgb(239, 69, 69)

}


    body{
        font-family:${() => Theme.font.primary};
        font-weight : ${() => Theme.font.regular};

    }
    .leaflet-container{
        width:100%;
        height:"300px";
        border:3px solid red;
    }
`;
