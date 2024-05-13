import { Box } from "@mui/material";
import BaseView from "./components/BaseView";
import useTracking from "./hooks/useTracking";
import "./App.css";

const TRACKING_ID = "G-RMZW4VZS2Z";

function App() {
  useTracking(TRACKING_ID);
  return (
    <Box>
      <BaseView />
    </Box>
  );
}

export default App;
