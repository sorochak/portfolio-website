import { Link as RouterLink } from "react-router-dom";
import { Box, Typography, Container, Grid, useMediaQuery } from "@mui/material";
import Link from "@mui/material/Link";
import { LinkedIn, GitHub } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import Logo from "./Logo";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      component="footer"
      sx={{
        paddingTop: isMobile ? "15px" : "30px", // Reduced paddingTop for mobile
        backgroundColor: theme.palette.background.default,
        boxShadow: "none",
        transition: "all 0.5s ease-in-out",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={isMobile ? 3 : 5} justifyContent="space-between"> {/* Reduced spacing for mobile */}
          {!isMobile && (
            <Grid
              item
              xs={12}
              sm={4}
              sx={{
                display: "flex",
                flexDirection: 'row',
                alignItems: "center",
                justifyContent: 'flex-start',
                textAlign: 'left'
              }}
            >
              <Box width={150} height={150}>
                <RouterLink to={"/"}>
                  <Logo width="75px" height="75px" />
                </RouterLink>
              </Box>
              <Typography
                variant="body1" // Changed from 'p' to 'body1'
                color="text.secondary"
                sx={{ marginTop: "-70px", marginLeft: "-20px" }}
              >
                Tech-meets-Terra: A Digital Dive into Nature's Depths
              </Typography>
            </Grid>
          )}

          <Grid item xs={12} sm={isMobile ? 6 : 4} sx={{ textAlign: isMobile ? 'center' : 'inherit' }}>
            <Typography
              variant="h6"
              color="text.primary"
              gutterBottom
              align="center"
            >
              Let's Chat!
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
              Email: info@austensorochak.com
            </Typography>
          </Grid>
          <Grid item xs={12} sm={isMobile ? 6 : 4} sx={{ textAlign: isMobile ? 'center' : 'right', paddingRight: isMobile ? '0px' : '40px' }}>
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
