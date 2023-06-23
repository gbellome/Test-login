import Login from "./views/Login";
import Home from "./views/Home";

import Box from '@mui/material/Box'

import { Routes, Route } from "react-router-dom";

/* Estilos */
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#DB777D",
      main: "#A12C34",
      dark: "#8A1C33",
      contrastText: "#FFF",
    },
    secondary: {
      light: "#8A8A8A",
      main: "#2D2D2D",
      dark: "#101010",
      contrastText: "#FFF",
    },
    facebook: "#3b5998",
    twitter: "#00acee",
    google: "#ab2128",
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        bgcolor={"primary.main"}
        width={"100vw"}
        height={"100vh"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
};

export default App;
