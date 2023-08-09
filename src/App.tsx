import Routes from "./routes";
import { theme } from "./styles";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
