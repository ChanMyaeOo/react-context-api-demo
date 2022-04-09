import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();
const ThemeUpdateContext = createContext();

export function useTheme() {
    return useContext(ThemeContext);
}

export function useThemeUpdate() {
    return useContext(ThemeUpdateContext);
}

export const ThemeProvider = ({ children }) => {
    const [changeTheme, setChangeTheme] = useState(false);

    const toggleTheme = () => {
        setChangeTheme((prevTheme) => !prevTheme);
    };
    return (
        <ThemeContext.Provider value={changeTheme}>
            <ThemeUpdateContext.Provider value={toggleTheme}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    );
};
