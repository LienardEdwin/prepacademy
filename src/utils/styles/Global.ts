import { createGlobalStyle, withTheme } from 'styled-components';

const globalStyle = createGlobalStyle`
  :root {
    //dark-mode
    --dark-background: #4B5563;
    --dark-text: #F5F5F7;
    //light-mode
    --light-background: #FFFFF;
    --light-text: black;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Roboto', sans-serif;
  }
  #root{
    width: 100%;
  }
  body  {
    margin: 0 auto;
    background-color: lightGray;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h2{
    color: black;
  }
  p{
    color: black;
  }
  span{
    color: black
  }
`;

export default withTheme(globalStyle);