import { Link as RouterLink } from "react-router-dom";
import { Box, Typography, Container, Grid } from "@mui/material";
import Link from "@mui/material/Link";
import { LinkedIn, GitHub } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import Logo from "./Logo";

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      style={{
        backgroundColor: theme.palette.background.default,
        boxShadow: "none",
        transition: "all 0.5s ease-in-out",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Box width={150} height={150}>
              <RouterLink to={"/"}>
                <Logo width="75px" height="75px" />
              </RouterLink>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Let's Chat!
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: info@austensorochak.com
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Follow Me
            </Typography>
            <Link
              href="https://www.linkedin.com/in/austensorochak/"
              color="inherit"
              target="_blank"
            >
              <LinkedIn />
            </Link>
            <Link
              href="https://github.com/sorochak"
              color="inherit"
              sx={{ pl: 1, pr: 1, transition: "all 0.1s ease-in-out" }}
              target="_blank"
            >
              <GitHub />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="inherit" component={RouterLink} to="/">
              Austen Sorochak
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
