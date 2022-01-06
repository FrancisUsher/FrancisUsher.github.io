import { Typography } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useMemo } from "react";
import { jobs, resumeItems } from "./resume";
import JobsLayout from "./components/JobsLayout";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <div className="App">
        <header className="App-header">
          <Typography variant="h3">Francis' Resume</Typography>
        </header>
        <JobsLayout jobs={jobs} resumeItems={resumeItems}></JobsLayout>
      </div>
    </ThemeProvider>
  );
}

export default App;
