import { Box, Typography, Button } from "@mui/material";
import { useContext } from "react";
import backgroundImage from "../static/nayuca.webp";
import { ColorModeContext } from "../components/BaseView";

const Home = () => {
  const { mode } = useContext(ColorModeContext);

  const childBoxBackgroundColor =
    mode === "dark" ? "rgba(0, 0, 0, 0.45)" : "rgba(255, 255, 255, 0.25)";

  console.log(childBoxBackgroundColor);

  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        width: "100vw",
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minHeight: "80vh", // taking up at least 80% of the viewport height
        px: 3, // padding for left and right
      }}
    >
      <Box
        component="div"
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          // background: "rgba(255, 255, 255, 0.25)",
          // background: "rgba(0, 0, 0, 0.45)",
          background: childBoxBackgroundColor,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography component="p" variant="subtitle1" gutterBottom>
          Hi, my name is
        </Typography>

        <Typography component="h1" variant="h2" gutterBottom>
          Austen Sorochak
        </Typography>

        <Typography component="h2" variant="h4" gutterBottom>
          Full-stack Web Developer
        </Typography>

        <Typography component="p" variant="subtitle1" gutterBottom>
          Crafting pixel-perfect designs and efficient code for the modern web.
        </Typography>

        <Box mt={3}>
          {" "}
          {/* Margin top to give some space above the button */}
          <Button variant="contained" color="primary">
            View my work
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
