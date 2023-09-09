import { Box, Typography, Button } from "@mui/material";
import { useContext } from "react";
import backgroundImage from "../static/nayuca.webp";
import { ColorModeContext } from "../components/BaseView";

const Home = () => {
  const { mode } = useContext(ColorModeContext);

  const childBoxBackgroundColor =
    mode === "dark" ? "rgba(0, 0, 0, 0.5)" : "rgba(213, 255, 252, 0.3)";

  const textShadow =
    mode === "dark"
      ? "1px 1px 20px #fff0, 0 0 25px #ffffff70, 0 0 15px #ffffff80"
      : "1px 1px 20px #fff, 0 0 25px #fff, 0 0 15px #fff";

  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        width: "100%",
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
          background: childBoxBackgroundColor,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.5s ease-in-out",
        }}
      >
        <Typography
          component="h1"
          variant="h2"
          gutterBottom
          sx={{
            fontWeight: 700,
            fontFamily: "Julius Sans One, Helvetica, Arial, sans-serif",
            textShadow: textShadow,
          }}
        >
          Austen Sorochak
        </Typography>

        {/* <Typography
          component="h2"
          variant="h4"
          gutterBottom
          sx={{
            fontWeight: 600,
            fontFamily: "Arial, sans-serif",
            textShadow: "-3px 2px 10px rgba(0,0,0,0.8)",
          }}
        >
          Tech-meets-Terra: A Digital Dive into Nature's Depths
        </Typography> */}

        <Typography
          component="h6"
          variant="h6"
          gutterBottom
          sx={{
            fontWeight: 600,
            fontFamily: "Julius Sans One, Helvetica, Arial, sans-serif",
            textShadow: textShadow,
          }}
        >
          Full-stack Developer | Environmental Scientist
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
