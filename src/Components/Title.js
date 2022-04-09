import React from "react";
import { useTheme } from "../Contexts/ThemeContext";

const Title = () => {
    const theme = useTheme();
    return <div>{theme ? "DARK" : "GREY"}</div>;
};

export default Title;
