import { Box, Typography, Button, useTheme, useMediaQuery, Container, Grid, Paper } from "@mui/material";
import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import backgroundImage from "../static/nayuca.webp";
import { ColorModeContext } from "../components/BaseView";
import signature from "../static/sorochakSignature.png"

const Home = () => {
  const theme = useTheme();
  const location = useLocation();
  const { mode } = useContext(ColorModeContext);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const childBoxBackgroundColor =
    mode === "dark" ? "rgba(0, 0, 0, 0.38)" : "rgba(213, 255, 252, 0.3)";

  const textShadow =
    mode === "dark"
      ? "1px 1px 20px #fff0, 0 0 25px #ffffff70, 0 0 15px #ffffff80"
      : "1px 1px 20px #fff, 0 0 25px #fff, 0 0 15px #fff";

      useEffect(() => {
        // Only perform smooth scroll if the user navigates directly to the URL with hash
        if (location.hash === '#about-section' && !location.state?.key) {
          const section = document.querySelector('#about-section');
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, [location]);

  return (
    <>
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
        minHeight: "100vh", // taking up at least 80% of the viewport height
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
            textAlign: 'center'
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

        {
        isMobile ? (
          <>
            <Typography
              component="h6"
              variant="h6"
              gutterBottom
              sx={{
                fontWeight: 700,
                fontFamily: "Julius Sans One, Helvetica, Arial, sans-serif",
                textShadow: textShadow,
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
            }}
          >
            Full-stack Developer | Environmental Scientist
          </Typography>
        )
      }

        <Box mt={3}>
          {" "}
          {/* Margin top to give some space above the button */}
          <Button variant="contained" color="primary">
            View my work
          </Button>
        </Box>
      </Box>
    </Box>
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper id="about-section" elevation={3} style={{ padding: '20px' }}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Typography variant="h4" gutterBottom>
                Hi, I'm Austen!
              </Typography>
            </Box>
            <Typography variant="body1" sx={{ mb: 2 }}>
            My vision is to help create an enlightened society...
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
            This begins with examining my own experiences to understand the value I bring to the world.
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
            Passionate about leveraging technology to better understand our surroundings, I aim to bring scientific data to the web in interactive and impactful ways, assisting in addressing the pressing challenges of the 21st century. From my roots as an Environmental Scientist, technology has always held a pivotal role in my endeavours.            
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
            Having graduated from Camosun College with a focus on Information & Computer Systems, I now work as a Full-Stack Software Developer. My core responsibility revolves around designing, developing, and deploying software solutions that efficiently collect, transform, visualize, and distribute scientific data. With expertise in tools such as JavaScript, Postgresql, Docker, and Git, I ensure seamless interactions for users with intricate datasets. My proficiency also extends to Python/Django and various Cloud Products.            
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
            My environmental management journey spans over seven years, touching various industries like mining, oil & gas, water treatment, and contaminated sites remediation. This profession has taken me across the vast expanses of Canada, from military training areas in the prairies to the icy shores of northern Baffin Island, Nunavut, and even remote indigenous communities on the central coast of British Columbia.          
            </Typography>
            <Box mt={4} display="flex" justifyContent="flex-end">
              <img src={signature} alt="Austen's Signature" style={{ maxWidth: '150px' }} />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
    </>
  );
};

export default Home;
