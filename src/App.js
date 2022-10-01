import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Create from "./pages/Create";
import Notes from "./pages/Notes";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { blue, purple } from "@material-ui/core/colors";
import Layout from "./components/Layout";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#fefefe",
    },
    secondary: purple,
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Notes />} />
              <Route path="/create" element={<Create />} />
            </Routes>
          </Layout>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
