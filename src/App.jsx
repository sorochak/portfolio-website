import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Box } from "@mui/material";
import BaseView from "./components/BaseView";
import "./App.css";
import GoogleAnalyticsWrapper from "./components/GoogleAnalyticsWrapper";

function App() {
  return (
    <BrowserRouter basename="/">
      <GoogleAnalyticsWrapper>
        <Box>
          <BaseView />
        </Box>
      </GoogleAnalyticsWrapper>
    </BrowserRouter>
  );
}

export default App;
