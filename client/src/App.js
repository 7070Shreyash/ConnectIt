import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "scenes/homePage";
import LoginPage from "scenes/loginPage";
import ProfilePage from "scenes/profilePage";
import BlogsPage from "scenes/BlogsPage";
import ExplorePage from "scenes/ExplorePage";
import FrontPage from "scenes/FirstPage";
import QuesPage from "scenes/QuesPage";
import ReferralPage from "scenes/ReferralPage";
import StartupPage from "scenes/StartupPage";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token));
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
          <Route  path="/" element={<FrontPage />} />
          <Route
              path="/startup"
              element={isAuth ? <StartupPage /> : <Navigate to="/" />}
            />
          <Route
              path="/referral"
              element={isAuth ? <ReferralPage /> : <Navigate to="/" />}
            />
           <Route
              path="/blogs"
              element={isAuth ? <BlogsPage /> : <Navigate to="/" />}
            />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/home"
              element={isAuth ? <HomePage /> : <Navigate to="/" />}
            />
            <Route
              path="/user/:userId"
              element={isAuth ? <UserPage /> : <Navigate to="/" />}
            />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}
export default App;


