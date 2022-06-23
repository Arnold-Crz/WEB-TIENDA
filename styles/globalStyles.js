import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  
/* 
  --negro-color: #05060b; //negro
  --azul-color: #0072f5; //azul
  --rosado-color: #de2ff7; //rosado
  --purpura-color: #9750dd; //purpura
  --blanco-color: #FFFFFF; //blanco
  --azul-oscuro-color: #223546; //azul_oscuro
  --gris-color: #35363a; //gris


 */

:root{
  --negro-color: #05060b; 
  --azul-color: #0072f5; 
  --rosado-color: #de2ff7; 
  --purpura-color: #9750dd; 
  --blanco-color: #FFFFFF; 
  --azul-oscuro-color: #223546; 
  --gris-color: #35363a;
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
