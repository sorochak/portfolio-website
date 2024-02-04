import { Box, Typography, Container, Grid, Paper } from "@mui/material";

const Projects = () => {
  return (
    <Box>
      <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper id="about-section" elevation={3} style={{ padding: '20px' }}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Typography variant="h4" gutterBottom>
                This is my Projects Section
              </Typography>
            </Box>
            <Typography variant="body1" sx={{ mb: 2 }}>
            A bunch of text will go here...
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
    </Box>
  );
};

export default Projects;
