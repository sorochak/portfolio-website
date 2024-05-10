import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Typography,
  Container,
  Grid,
  useMediaQuery,
  Button,
} from "@mui/material";
import Link from "@mui/material/Link";
import { LinkedIn, GitHub } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import Logo from "./Logo";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      component="footer"
      sx={{
        paddingTop: "10px",
        paddingBottom: "10px",
        backgroundColor: theme.palette.background.default,
        boxShadow: "none",
        transition: "all 0.5s ease-in-out",
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={isMobile ? 3 : 5}
          justifyContent="space-between"
        >
          {" "}
          {/* Reduced spacing for mobile */}
          {!isMobile && (
            <Grid
              item
              xs={12}
              sm={4}
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                textAlign: "left",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <RouterLink to={"/"}>
                  <Logo
                    width="50px"
                    height="50px"
                    style={{
                      filter: "drop-shadow(2px 2px 1.5px rgba(255,255,255,1))",
                    }}
                  />
                </RouterLink>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ ml: 2, mt: 0 }}
                >
                  Tech-meets-Terra: A Digital Dive into Nature's Depths
                </Typography>
              </Box>
            </Grid>
          )}
          <Grid
            item
            xs={12}
            sm={isMobile ? 6 : 4}
            sx={{ textAlign: isMobile ? "center" : "inherit" }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h6"
                color="text.primary"
                gutterBottom={false}
                align="center"
              >
                Let's Chat!
              </Typography>
              <Typography
                variant="h6"
                color="primary"
                gutterBottom
                align="center"
                component={RouterLink}
                to="/contact"
                sx={{
                  cursor: "pointer",
                  textDecoration: "none",
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                }}
              >
                CONTACT ME
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={isMobile ? 6 : 4}
            sx={{
              textAlign: isMobile ? "center" : "right",
              paddingRight: isMobile ? "0px" : "40px",
            }}
          >
            <Typography variant="h6" color="text.primary" gutterBottom>
              Follow Me
            </Typography>
            <Link
              href="https://www.linkedin.com/in/austensorochak/"
              target="_blank"
            >
              <LinkedIn />
            </Link>
            <Link
              href="https://github.com/sorochak"
              sx={{ pl: 2, pr: 2 }} // Increased spacing for better touch targets
              target="_blank"
            >
              <GitHub />
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
