import React, { Component, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Fade from "@mui/material/Fade";
import PropTypes from "prop-types";
import { StyledEngineProvider } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";

import Home from "../components/Home";
import NavBar from "../components/NavBar";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import Artworks from "./Artworks";
import ArtworkShow from "./ArtworkShow";
import ArtworkForm from "./ArtworkForm";
import ScrollToTop from "../components/ScrollToTop";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import About from "../components/About";
import "./App.scss";

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    fetch("/userInSession")
      .then((r) => r.json())
      .then((userAlreadyLoggedIn) => {
        userAlreadyLoggedIn.data &&
          setLoggedInUser(userAlreadyLoggedIn.data.attributes);
      });
  }, []);

  const handleLogout = () => {
    fetch("/logout", { method: "DELETE" })
      .then((r) => r.json())
      .then((json) => {
        setLoggedInUser(null);
      });
  };
  console.log("App  loggedInUser", loggedInUser);

  return (
    <main>
      <ResponsiveAppBar
        loggedInUser={loggedInUser}
        handleLogout={handleLogout}
      />
      <Toolbar id="back-to-top-anchor" />
      <div className="App" id="container">
        <NavBar />
        <br></br>
        <Routes>
          <Route
            path="/signup"
            element={<SignupForm setLoggedInUser={setLoggedInUser} />}
          />
          <Route
            path="/login"
            element={<LoginForm setLoggedInUser={setLoggedInUser} />}
          />
          <Route path="/" element={<Home />} />
          <Route path="/artwork/new" element={<ArtworkForm />} />
          <Route path="/artworks/:id" element={<ArtworkShow />} />
          <Route path="/artworks" element={<Artworks />} />
        </Routes>
        <ScrollToTop />
      </div>
    </main>
  );
}

export default App;
