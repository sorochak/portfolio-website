import {
  Box,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
  Container,
  Grid,
  CardMedia,
} from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../static/nayuca.webp";
import { ColorModeContext } from "../components/BaseView";
import signature from "../static/sorochakSignature.png";
import avatarImage from "../static/selfie.jpg";
import Logo from "../components/Logo";

const Home = () => {
  const theme = useTheme();
  const { mode } = useContext(ColorModeContext);

  // Using useMediaQuery to detect if the screen size is <='small' for conditional rendering
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Background color for the overlay box, changes based on theme mode
  const childBoxBackgroundColor =
    mode === "dark" ? "rgba(0, 0, 0, 0.38)" : "rgba(213, 255, 252, 0.3)";

  const textShadow =
    mode === "dark"
      ? "1px 1px 20px #fff0, 0 0 25px #ffffff70, 0 0 15px #ffffff80"
      : "1px 1px 20px #fff, 0 0 25px #fff, 0 0 15px #fff";

  return (
    <>
      {/* Main hero container with background image */}
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
          minHeight: "50vh",
          px: 3,
          borderBottom: 1,
          borderColor: "primary.main",
        }}
      >
        {/* Overlay box  */}
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
          {/* Container for titles and roles */}
          <Box sx={{ mt: 5 }}>
            <Typography
              component="h1"
              variant="h2"
              gutterBottom
              sx={{
                fontWeight: 700,
                fontFamily: "Julius Sans One, Helvetica, Arial, sans-serif",
                textShadow: textShadow,
                textAlign: "center",
                fontSize: {
                  xs: "2rem",
                  sm: "2.25rem",
                },
              }}
            >
              Austen Sorochak
            </Typography>

            {/* Conditional rendering based on screen size for job titles */}
            {isMobile ? (
              <>
                <Typography
                  component="h6"
                  variant="h6"
                  gutterBottom
                  sx={{
                    fontWeight: 700,
                    fontFamily: "Julius Sans One, Helvetica, Arial, sans-serif",
                    textShadow: textShadow,
                    textAlign: "center",
                    fontSize: "1.3rem",
                    lineHeight: 1.2,
                  }}
                >
                  Full-stack Developer
                </Typography>
                <Typography
                  component="h6"
                  variant="h6"
                  gutterBottom
                  sx={{
                    fontWeight: 700,
                    fontFamily: "Julius Sans One, Helvetica, Arial, sans-serif",
                    textShadow: textShadow,
                    textAlign: "center",
                    fontSize: "1rem",
                    lineHeight: 1.2,
                  }}
                >
                  Environmental Scientist
                </Typography>
              </>
            ) : (
              <Typography
                component="h6"
                variant="h6"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  fontFamily: "Julius Sans One, Helvetica, Arial, sans-serif",
                  textShadow: textShadow,
                  textAlign: "center",
                }}
              >
                Full-stack Developer | Environmental Scientist
              </Typography>
            )}
          </Box>
          {/* Button to view work - Link to projects */}
          <Box mt={3}>
            <Link to="/projects" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                color="primary"
                sx={{ transition: "all 0.5s ease-in-out" }}
              >
                View my work
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
      {/* About section with responsive grid layout */}
      <Container maxWidth="lg" id="about-section">
        {/* Outer box providing consistent spacing for the about section */}
        <Box
          sx={{
            marginTop: {
              xs: 5,
              sm: 8,
            },
            marginBottom: { lg: 5 },
          }}
        >
          {/* Grid container to structure the layout into two columns on larger screens and one column on smaller screens */}
          <Grid container>
            {/* Grid item for the profile image */}
            <Grid item xs={12} sm={12} md={6}>
              {/* Box for adding left margin specifically on larger screens, ensuring the image is not too close to the screen edge */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginLeft: { md: 9 },
                  marginBottom: { md: 3 },
                }}
              >
                {/* CardMedia component for profile image with responsive adjustments */}
                <CardMedia
                  component="img"
                  image={avatarImage}
                  alt="selfie"
                  sx={{
                    width: {
                      xs: "85%",
                      sm: "80%",
                      md: "80%",
                      lg: "80%",
                    },

                    height: "auto",
                    objectFit: "cover",
                    borderRadius: "15%",
                    border: 2,
                    borderColor: "primary.main",
                  }}
                />
              </Box>
            </Grid>
            {/* Grid item for the textual content next to the image */}
            <Grid item xs={12} sm={12} md={6}>
              {/* Box to manage spacing and alignment of the text content */}
              <Box
                sx={{
                  flex: 1,
                  marginRight: { lg: 4 },
                  marginTop: 2,
                  marginLeft: { xs: 1.5, sm: 0 },
                  padding: {
                    xs: 2,
                    sm: 5,
                    md: 1,
                  },
                }}
              >
                {isMobile ? (
                  <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                    <Logo
                      width="50px"
                      height="50px"
                      style={{
                        filter:
                          "drop-shadow(2px 2px 1.5px rgba(255,255,255,1))",
                      }}
                    />
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ ml: 2, mt: 0 }}
                    >
                      Tech-meets-Terra: A Digital Dive into Nature's Depths
                    </Typography>
                  </Box>
                ) : null}
                {/* Heading introducing Austen */}{" "}
                <Typography variant="h4" gutterBottom>
                  Hi, I'm Austen!
                </Typography>
                {/* Paragraph describing professional vision and impact */}
                <Typography
                  variant="body1"
                  sx={{
                    mb: 2,
                    fontSize: {
                      xs: "1rem",
                      xl: "1.1rem",
                    },
                  }}
                >
                  I am driven by a vision to contribute to an enlightened
                  society through technology. My background as an Environmental
                  Scientist and a Full-Stack Software Developer has equipped me
                  to address critical 21st-century challenges by bringing
                  scientific data to the web in engaging and impactful ways.
                </Typography>
                {/* Paragraph detailing academic and professional background */}
                <Typography
                  variant="body1"
                  sx={{
                    mb: 2,
                    fontSize: {
                      xs: "1rem",
                      xl: "1.1rem",
                    },
                  }}
                >
                  I graduated from Camosun College with a focus on Information &
                  Computer Systems and currently design, develop, and deploy
                  software that enhances the accessibility and usability of
                  complex datasets.
                </Typography>
                {/* Paragraph highlighting diverse experiences in environmental management */}
                <Typography
                  variant="body1"
                  sx={{
                    mb: 2,
                    fontSize: {
                      xs: "1rem",
                      xl: "1.1rem",
                    },
                  }}
                >
                  With over seven years in environmental management, I have
                  gained diverse experiences across Canada—from military
                  training areas to the icy shores of northern Baffin Island and
                  remote Indigenous communities. My work spans industries such
                  as mining, oil & gas, water treatment, and contaminated sites
                  remediation, providing a solid foundation for my
                  technology-driven projects.
                </Typography>
                {/* Container for Austen's signature, aligned to the right */}
                <Box mt={2} pr={2} display="flex" justifyContent="flex-end">
                  <img
                    src={signature}
                    alt="Austen's Signature"
                    style={{ maxWidth: "180px" }}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Home;
