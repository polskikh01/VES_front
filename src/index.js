import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,
        Route,
        Routes,
        Link
} from "react-router-dom";

import {createGlobalStyle} from 'styled-components';

import App from './containers/App';
import Education from "./containers/Education";

const GlobalStyle = createGlobalStyle`
  * {
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    margin: 0;
    padding: 0;
    font-family: 'Rubik', 'Montserrat', 'Raleway', sans-serif;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
`;

ReactDOM.render(
    <BrowserRouter>
        <GlobalStyle/>
        <Routes>
            <Route exact path="/" element={<App/>}/>
            <Route path="/education" element={<Education/>}/>
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);
