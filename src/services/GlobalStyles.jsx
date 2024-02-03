import { useContext } from "react";
import { createGlobalStyle } from "styled-components";

import "normalize.css";
import "@fontsource/inter";
import "@fontsource/josefin-sans";
import "@fontsource/press-start-2p";

import { AppContext } from "../context/AppContext";

const darkBG = `
  background: linear-gradient(to bottom, #8B008B, #000000);
`;
const lightBG = `
  background: linear-gradient(to bottom, #8B008B, #00FF00);
`;

const GlobalStyle = createGlobalStyle`
	@font-face {
        font-family: "Pokemon-Hollow";
        src: url("./public/fonts/Pokemon-Hollow.ttf") format("truetype");
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: "Pokemon-Solid";
        src: url("./public/fonts/Pokemon-Solid.ttf") format("truetype");
        font-weight: normal;
        font-style: normal;
    }
	
	body {
		${({ isDarkTheme }) => (!isDarkTheme ? darkBG : lightBG)}
		color: #aae30e;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		font-family: 'Pokemon-Hollow', sans-serif;
		font-size: 24px;
		text-align: center;
		margin: 0;
	}
	a {
		cursor: pointer;
		caret-color: transparent;
	}
	div {
		caret-color: transparent;
	}
	button {
		cursor: pointer;
	}
`;

const GlobalStyles = () => {
  const { isDarkTheme } = useContext(AppContext);
  return <GlobalStyle isDarkTheme={isDarkTheme} />;
};
export default GlobalStyles;
