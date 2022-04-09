import React from "react";
import { useTheme } from "../Contexts/ThemeContext";
import Title from "./Title";

const Box = () => {
    const theme = useTheme();
    return (
        <div style={theme ? style.darkBox : style.lightBox}>
            <Title />
        </div>
    );
};

export default Box;

const style = {
    lightBox: {
        backgroundColor: "#ddd",
        width: "200px",
        height: "200px",
        marginTop: "25px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#000",
    },
    darkBox: {
        backgroundColor: "#111",
        width: "200px",
        height: "200px",
        marginTop: "25px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
    },
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
    },
};
