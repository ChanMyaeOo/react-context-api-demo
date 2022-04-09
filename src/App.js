import Box from "./Components/Box";
import Button from "./Components/Button";
import { ThemeProvider } from "./Contexts/ThemeContext";

function App() {
    return (
        <div style={style.container}>
            <ThemeProvider>
                <Button />

                <Box />
            </ThemeProvider>
        </div>
    );
}

export default App;

const style = {
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
    },
};
