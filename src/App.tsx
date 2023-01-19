import React, { useEffect, useState } from "react";

import { Provider } from "react-redux";
import styled, { ThemeProvider } from "styled-components";
import { store } from "./toolkit/store";
import { Theme } from "./styles/Theme";
import { GlobalStyles } from "./styles/GlobalStyles";
import Home from "./components/Home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  redirect,
} from "react-router-dom";
import TimeTracker from "./components/Home/pages/TimeTracker";
import Dashboard from "./components/Home/pages/Dashboard";
import Reports from "./components/Home/pages/Reports";
import Projects from "./components/Home/pages/Projects";
import Settings from "./components/Home/pages/Settings";
import Team from "./components/Home/pages/Team";
import Logins from "./pages/Logins";
import Protected from "./components/Protected";
import SignUp from "./pages/SignUp";
import Form from "./pages/test";
import Register from "./pages/Register";

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />

        <Router>
          <Routes>
            <Route path="/" element={<Logins />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/testing" element={<Form />} />
            <Route path="/register" element={<Register />} />

            <Route path="/tracker" element={<Protected Component={Home} />}>
              <Route path="" element={<TimeTracker />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="reports" element={<Reports />} />
              <Route path="projects" element={<Projects />} />
              <Route path="team" element={<Team />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
