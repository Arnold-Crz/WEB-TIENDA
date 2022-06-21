import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  
/* 
  --primer-color: #05060b; //negro
  --segundo-color: #0072f5; //azul
  --tercero-color: #de2ff7; //rosado
  --cuarto-color: #9750dd; //purpura
  --quinto-color: #FFFFFF; //blanco
  --sexto-color: #223546; //azul_oscuro
  --septimo-color: #35363a; //gris


 */

:root{
  --primer-color: #05060b; 
  --segundo-color: #0072f5; 
  --tercero-color: #de2ff7; 
  --cuarto-color: #9750dd; 
  --quinto-color: #FFFFFF; 
  --sexto-color: #223546; 
  --septimo-color: #35363a;
}

html {
  margin: 0 auto;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  font-size: calc(14px + (16 - 14) * ((100vw - 300px) / (1200 - 300)));
  max-width: 1440px;
  min-width: 360px;
  width: 100%;
  overflow-x: hidden;
  scroll-behavior: smooth;
}

::-webkit-scrollbar {
  width: 10px;
  background-color: #dbdbdb;
}

::-webkit-scrollbar-thumb {
  background-color: #1895fc;
  
}

footer {
  max-width: 1440px;
}
*,
*::after,
*::before {
  box-sizing: inherit;
}
body {
  margin: 0;
  padding: 0;
  background-color: #f2f6f7;
}

a {
  text-decoration: none;
}

li{
  list-style: none;
}

button {
  outline: none;
  border: none;
}

input {
  border: none;
  outline: none;
  background: none;
}

h1,
h2,
h3,
p,
ul,
li {
  margin: 0;
  padding: 0;
}

`;

export default GlobalStyle;
