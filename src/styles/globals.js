//This pattern was inspired from:
//https://gitconnected.com/courses/learn-react-redux-tutorial-build-a-hacker-news-clone

import { injectGlobal } from 'styled-components';
// import { colorsDark, colorsLight } from './palette';
import { colorsLight } from './palette';

const setGlobalStyles = () => {
  injectGlobal`
* {
    box-sizing: border-box;
}

html, body {
    font-family: Lato, Helvetica-Neue,Helvetica,Arial,sans-serif;
    width: 99%;
    nim-height: 100vh;
    overflow-x: hidden;
    padding: 0;
    background: #f5f5f5;
    margin-bottom: 3%;
}

nav {
    width: 100%;
    background: #0653c7;
    height: 4em;
    // background-image: url(../assets/blue.jpeg) no-repeat center center fixed;
    // -webkit-background-size: cover;
    // -moz-background-size: cover;
    // -o-background-size: cover;
    // background-size: 100%;
}

.nav {
    display: inline-block;
    margin: .5em 5em 1em 1em;
    color: #f5f5f5;
}

nav ul {
    display: inline-block;
    list-style: none;
    padding: 0;
}

ul {
    list-style: none;
    padding: 0;
}

h2, h1 {
    text-align: center;
    //color: #0653c7;
    width: 99%
}
.container {
    border: ridge #0653c7;
    border-radius: .5em;
    text-align: center;
    margin: 0 3% 0 3%;
    margin-bottom: .5%;
    background: lightgray;
    //background: #0653c7;
}

.container-title {
    color: #0653c7;
    width: 100%
}

// .rollup {
//   display: flex;
// }

.list-wrapper {
    margin: 1em;
    //background-color: lightgray;
    border-radius: .5em;
  }

.row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }
  
.column {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
    height: 100%;
    border-radius: .5em;
    //box-shadow: 5px 2px 2px #283f61c0;
}

.column1 {
    background: #f5f5f5;
    border-radius: .5em;
    margin-right: 2%;
    margin-bottom: 2%;
}

.column2 {
    background: #f5f5f5;
    border-radius: .5em;
}

.column3 {
    background: #f5f5f5;
    margin-left: 2%;
    border-radius: .5em;
}

h3 {
  padding: 0 .5em 0 .5em; 
  text-align: center;
  background: #f5f5f5;
}

p { 
  padding: 0 .5em 0 .5em;
  font-weight: bold;
  color: #333;
  text-align: center;

}
a {
    text-decoration: none;
    &:visited {
      color: white;
    }
}

a:visited {
    color: white;
    text-decoration: none;
}

button {
    border-radius: 1em;
    background-color: #0653c7;
    font-family: "Avenir Next" !important;
    font-weight: bold;
    font-size: 12px;
    letter-spacing: 1px;
    padding: .3em 1.5em;
    margin: 1em auto;
    color: ${colorsLight.text};
}

button:hover {
    color: white;
    transform: scale(1.02);
    border: solid white 1px;
    cursor: pointer;
    background-color: #fb7361;
}

label {
    color: white;
}

input {
    background: lightgray;
}

fieldset {
    height: 7em;
    z-index: 10;
}

`;
};
export default setGlobalStyles;