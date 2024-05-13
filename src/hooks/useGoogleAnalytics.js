import React from "react";
import { useLocation } from "react-router-dom";

import analytics from "../util/analytics";

export default function useGoogleAnalytics() {
  const location = useLocation();

  React.useEffect(() => {
    analytics.init();
    console.log("useGoogleAnalytics: Analytics initialized");
  }, []);

  React.useEffect(() => {
    const currentPath = location.pathname + location.search;
    analytics.sendPageview(currentPath);
    console.log("useGoogleAnalytics: Pageview sent", currentPath);
  }, [location]);
}
