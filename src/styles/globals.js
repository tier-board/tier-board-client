//This pattern was inspired from:
//https://gitconnected.com/courses/learn-react-redux-tutorial-build-a-hacker-news-clone

import { injectGlobal } from 'styled-components';
import { colorsDark, colorsLight } from './palette';

const setGlobalStyles = () => {
injectGlobal`
* {
    box-sizing: border-box;
}

html, body {
    font-family: Lato, Helvetica-Neue,Helvetica,Arial,sans-serif;
    width: 95%;
    nim-height: 100vh;
    overflow-x: hidden;
    margin 3%;
    padding: 0;
    background: lightgray;
    //background-color: #0653c7;
}

ul {
    list-style: none;
    padding: 0;
}

h2, h1 {
    text-align: center;
    //color: #0653c7;
    width: 95%
}
.container {
    border: ridge;
    border-radius: .5em;
    //width: 95%;  
    text-align: center;
    margin-right: 5%;
    background: #f5f5f5;
    //background: #0653c7;
}

.container-title {
    color: #0653c7;
    width: 100%
}

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
    background: lightgray;
    border-radius: .5em;
    margin-right: 2%;
    margin-bottom: 2%;
}

.column2 {
    background: lightgray;
    border-radius: .5em;
}

.column3 {
    background: lightgray;
    margin-left: 2%;
    border-radius: .5em;
}

h3 {
  padding: 0 .5em 0 .5em; 
  text-align: center;
  background: lightgray;
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
      color: inherit;
    }
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

`;
}
export default setGlobalStyles;