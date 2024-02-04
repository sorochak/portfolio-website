import { Box, Typography, Container, Grid, Paper } from "@mui/material";

const Contact = () => {
  return (
    <Box>
      <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper id="about-section" elevation={3} style={{ padding: '20px' }}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Typography variant="h4" gutterBottom>
                This is my Contact Section
              </Typography>
            </Box>
            <Typography variant="body1" sx={{ mb: 2 }}>
            A contact form will go here
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
    </Box>
  );
};

export default Contact;
