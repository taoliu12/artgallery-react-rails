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
import Events from "../components/Events";
import Artworks from "./Artworks";
import ArtworkShow from "./ArtworkShow";
import ArtworkForm from "./ArtworkForm";
import ScrollToTop from "../components/ScrollToTop";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import Footer from "../components/Footer";
import About from "../components/About";
import EventShow from "../components/EventShow";

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

  return (
    <>
      <main>
        <div id='back-to-top-anchor'></div>
        <ResponsiveAppBar
          loggedInUser={loggedInUser}
          handleLogout={handleLogout}
        />
        <div className="App" id="container">
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
            <Route path="/events/:eventId" element={<EventShow />} />
            <Route path="/events" element={<Events />} />

          </Routes>
          <ScrollToTop />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
