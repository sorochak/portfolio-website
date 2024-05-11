import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import useSharedStyles from "../hooks/useSharedStyles";
import backgroundImage from "../static/nayuca.webp";

const NotFound = () => {
  const { isMobileLandscape, childBoxBackgroundColor, textShadow } =
    useSharedStyles();

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
        minHeight: {
          xs: "40vh", // For small screens
          sm: isMobileLandscape ? "100vh" : "40vh", // For landscape mode on mobile
          md: "40vh", // For medium and up screens
        },
        px: 3,
        borderBottom: 1,
        borderColor: "primary.main",
      }}
    >
      {/* Overlay box for the "Get in Touch" content */}
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
          variant="h1"
          sx={{
            textShadow,
            textAlign: "center",
            mb: 3,
          }}
        >
          404
        </Typography>
        <Typography variant="h5" align="center" paragraph>
          Oops! The page you're looking for doesn't exist.
        </Typography>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button variant="contained" color="primary">
            Back to Home
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default NotFound;
