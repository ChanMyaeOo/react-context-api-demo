import React, { useContext } from "react";
import { useThemeUpdate } from "../Contexts/ThemeContext";

const Button = () => {
    const toggleTheme = useThemeUpdate();
    return <button onClick={toggleTheme}>Toggle Theme</button>;
};

export default Button;
