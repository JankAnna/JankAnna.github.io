import React, { useEffect, useState, createContext } from "react";
import { ThemeProvider } from "styled-components";

//Lista de temas
import { darkTheme, lightTheme } from "@/styles/Theme";

//Pacotes com textos de linguagens
import plplJson from "@/config/localization/plpl.json";
import enusJson from "@/config/localization/enus.json";

const goToTop = () => {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
};

export const SettingsContext = createContext({});

const listaTemas = {
	dark: darkTheme,
	light: lightTheme,
};

export default function SettingsProvider({ children }) {
	const [theme, setTheme] = useState(darkTheme);
	const [changeLanguage, setLanguage] = useState(false);

	function changeTheme(newTheme) {
		setTheme(listaTemas[newTheme]);
	}

	function changeLanguageLocalization() {
		setLanguage(!changeLanguage);
	}

	var language = changeLanguage == true ? plplJson : enusJson;

	return (
		<SettingsContext.Provider value={{ changeTheme, changeLanguageLocalization, language }}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</SettingsContext.Provider>
	);
}
