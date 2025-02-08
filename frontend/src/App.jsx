import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./Pages/Home";
import LoginNew from "@/components/sub/Login-form";
import SignupNew from "@/components/sub/signupForm";

import MainLayout from "@/MainLayout";
import AuthLayout from "@/AuthLayout";

import MovieFinder from "./Pages/MovieFinder";
import RandomMedia from "./Pages/RandomMedia";
import MediaList from "./Pages/MediaList";
import MediaDetails from "./Pages/MediaDetails";
import Reco from "./Pages/Reco";
import Face from "./Pages/Face";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import PlaylistsPage from "./Pages/PlaylistsPage";
import RankedMovies from "./Pages/RankedMovies";
import { ThemeProvider } from "./contexts/ThemeContext";
import { SignupForm } from "./components/sub/signupForm";

const App = () => {
  return (
    <Router>
      <ThemeProvider>
        <div className="min-h-screen">
          
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Navigate to="/home" replace />} />
              <Route path="/home" element={<Home />} />
              <Route path="/movie" element={<MovieFinder />} />
              <Route path="/random" element={<RandomMedia />} />
              <Route path="/list" element={<MediaList />} />
              <Route path="/media/:id" element={<MediaDetails />} />
              <Route path="/reco" element={<Reco />} />
              <Route path="/face" element={<Face />} />
              {/* <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} /> */}
              <Route path="/playlists" element={<PlaylistsPage />} />
              <Route path="/ranked" element={<RankedMovies />} />
            </Route>
            <Route element={<AuthLayout />}>
            <Route path="/login" element={<LoginNew />} />
            <Route path="/signup" element={<SignupNew />} />
            
            </Route>
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  );
};

export default App;
