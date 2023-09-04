import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import BaseView from "./components/BaseView";

function App() {
  const theme = useTheme();
  return (
    <Box
      style={{
        backgroundColor: theme.palette.background.default,
        boxShadow: "none",
        transition: "all 0.5s ease-in-out",
      }}
    >
      <BaseView />
    </Box>
  );
}

export default App;
