import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Box } from "@mui/material";
import BaseView from "./components/BaseView";
import "./App.css";

function App() {
  return (
    <BrowserRouter basename="/">
      <Box>
        <BaseView />
      </Box>
    </BrowserRouter>
  );
}

export default App;
