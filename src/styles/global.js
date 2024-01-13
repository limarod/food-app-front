import {createGlobalStyle} from "styled-components"

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 62.5%;

    body, input, button, textarea{
    font-family: 'Roboto', sans-serif;
    outline: none;
   }
    
   body{
    background-color: ${({theme})=> theme.COLORS.PrimaryBackground};
    background-color: ${({theme}) => theme.COLORS.Dark500};

    color: ${({theme})=> theme.COLORS.FONT_COLOR};

    /* width: 100vw; */
   }

   body.menu-open{
    overflow: hidden;
   }

    a{
      text-decoration: none;
    }

    button, a{
      cursor: pointer;
      
    }

    button:hover{
      filter: opacity(0.65);
    }
  }
`