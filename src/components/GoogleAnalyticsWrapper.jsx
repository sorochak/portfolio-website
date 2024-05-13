import React from "react";
import { Routes, Route } from "react-router-dom";
import useGoogleAnalytics from "../hooks/useGoogleAnalytics";

const GoogleAnalyticsWrapper = ({ children }) => {
  useGoogleAnalytics();

  return <>{children}</>;
};

export default GoogleAnalyticsWrapper;
