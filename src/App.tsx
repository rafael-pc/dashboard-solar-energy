import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "./styles/global";
import { theme } from "./styles/theme";
import { ThemeProvider } from "styled-components";

import {
  Login,
  Dashboard,
  ListUnits,
  EditUnits,
  RegisterUnits,
  RegisterMonth,
} from "./pages";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/units" element={<ListUnits />} />
          <Route path="/edit/:id" element={<EditUnits />} />
          <Route path="/register_units" element={<RegisterUnits />} />
          <Route path="/register_month" element={<RegisterMonth />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
