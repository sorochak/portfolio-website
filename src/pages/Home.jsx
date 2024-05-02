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

const Home = () => {
  const theme = useTheme();
  const { mode } = useContext(ColorModeContext);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const childBoxBackgroundColor =
    mode === "dark" ? "rgba(0, 0, 0, 0.38)" : "rgba(213, 255, 252, 0.3)";

  const textShadow =
    mode === "dark"
      ? "1px 1px 20px #fff0, 0 0 25px #ffffff70, 0 0 15px #ffffff80"
      : "1px 1px 20px #fff, 0 0 25px #fff, 0 0 15px #fff";

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
          minHeight: "50vh",
          px: 3,
          borderBottom: 1,
          borderColor: "primary.main",
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
                  textAlign: "center",
                }}
              >
                Full-stack Developer | Environmental Scientist
              </Typography>
            )}
          </Box>
          <Box mt={3}>
            {" "}
            {/* Margin top to give some space above the button */}
            <Link to="/projects" style={{ textDecoration: "none" }}>
              <Button variant="contained" color="primary">
                View my work
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
      <Container maxWidth="lg" id="about-section" sx={{ minHeight: "30vh" }}>
        <Box
          sx={{
            marginTop: 8,
            marginBottom: 8,
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6}>
              <Box sx={{ marginLeft: 9 }}>
                <CardMedia
                  component="img"
                  image={avatarImage}
                  alt="Austen Paddling"
                  sx={{
                    width: 400, // Adjust width as needed
                    // height: 400, // Adjust height as needed
                    objectFit: "cover",
                    borderRadius: "15%",
                    border: 2,
                    borderColor: "primary.main",
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Box sx={{ flex: 1, marginRight: 4, marginTop: 3 }}>
                <Typography variant="h4" gutterBottom>
                  Hi, I'm Austen!
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, fontSize: "1rem" }}>
                  I am driven by a vision to contribute to an enlightened
                  society through technology. My background as an Environmental
                  Scientist and a Full-Stack Software Developer has equipped me
                  to address critical 21st-century challenges by bringing
                  scientific data to the web in engaging and impactful ways.
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, fontSize: "1rem" }}>
                  I graduated from Camosun College with a focus on Information &
                  Computer Systems and currently design, develop, and deploy
                  software that simplifies interactions with complex datasets.
                  My technical expertise includes JavaScript, PostgreSQL,
                  Docker, Git, Python/Django, and various Cloud Products.
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, fontSize: "1rem" }}>
                  With over seven years in environmental management, I have
                  gained diverse experiences across Canada—from military
                  training areas to the icy shores of northern Baffin Island and
                  remote Indigenous communities. My work spans industries such
                  as mining, oil & gas, water treatment, and contaminated sites
                  remediation, providing a solid foundation for my
                  technology-driven projects.
                </Typography>
                <Box mt={-4} pr={14} display="flex" justifyContent="flex-end">
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
