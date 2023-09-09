import { Box, Typography, Button } from "@mui/material";
import { useContext } from "react";
import backgroundImage from "../static/nayuca.webp";
import { ColorModeContext } from "../components/BaseView";

const Home = () => {
  const { mode } = useContext(ColorModeContext);

  const childBoxBackgroundColor =
    mode === "dark" ? "rgba(0, 0, 0, 0.5)" : "rgba(213, 255, 252, 0.35)";

  //rgba(0, 0, 0, 0.29)

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
        }}
      >
        {/* <Typography
          component="p"
          variant="subtitle1"
          gutterBottom
          sx={{
            fontWeight: 450,
            textShadow: "0px 1px 2px rgba(0, 0, 0, 0.2)",
          }}
        >
          Hi, my name is
        </Typography> */}

        <Typography
          component="h1"
          variant="h2"
          gutterBottom
          sx={{
            fontWeight: 700,
            fontFamily: "Julius Sans One, Helvetica, Arial, sans-serif",
            textShadow: "-3px 2px 10px rgba(0,0,0,0.8)",
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
            textShadow: "0px 1px 2px rgba(0, 0, 0, 0.2)",
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
