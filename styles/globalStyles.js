import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;600;800&display=swap');

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
  width: 15px;
  background-color: #dbdbdb;
}

::-webkit-scrollbar-thumb {
  background-color: #1895fc;
  border-radius: 50px;
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
