import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Box } from "@mui/material";
import BaseView from "./components/BaseView";
import "./App.css";
import useGoogleAnalytics from "./hooks/useGoogleAnalytics";

function App() {
  useGoogleAnalytics();
  return (
    <BrowserRouter basename="/">
      <Box>
        <BaseView />
      </Box>
    </BrowserRouter>
  );
}

export default App;
