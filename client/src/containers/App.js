import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import Events from "../components/Events";
import Artworks from "./Artworks";
import ArtworkForm from "./ArtworkForm";
import BackToTop from "../components/BackToTop";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import Footer from "../components/Footer";
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
    <div className="App" id="container">
      <div id="back-to-top-anchor"></div>
      <main>
        <ResponsiveAppBar
          loggedInUser={loggedInUser}
          handleLogout={handleLogout}
        />
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
          <Route path="/artworks" element={<Artworks />} />
          <Route path="/events/:eventId" element={<EventShow />} />
          <Route path="/events" element={<Events />} />
        </Routes>
        <BackToTop />
      </main>
      <Footer />
    </div>
  );
}

export default App;
