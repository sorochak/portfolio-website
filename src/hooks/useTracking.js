import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useTracking = (trackingId) => {
  const location = useLocation();

  useEffect(() => {
    if (!window.gtag) return;
    if (!trackingId) {
      console.log("Tracking not enabled, no `trackingId`.");
      return;
    }

    window.gtag("config", trackingId, { page_path: location.pathname });
  }, [location, trackingId]);
};

export default useTracking;
