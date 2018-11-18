import React, { Fragment } from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
`;

const GlobalStyling = ({ children }) => {
    return (
        <React.Fragment>
            <GlobalStyle />
            {children}
        </React.Fragment>
    );
};

export default GlobalStyling;
