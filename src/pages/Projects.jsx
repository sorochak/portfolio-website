import { Box, Typography, Container, Grid } from "@mui/material";

const Projects = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        padding: 3,
        paddingTop: "100px",
      }}
    >
      <Container maxWidth="false">
        <Grid container spacing={3} justifyContent="center">
          {/* Project Header */}
          <Typography
            variant="h4"
            align="center"
            sx={{
              mb: 2,
              marginTop: "50px",
              fontWeight: "bold",
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
            }}
          >
            SELECTED PROJECTS
          </Typography>
          <Grid item xs={12} md={12} lg={12}>
            {/* Hakai Data Portal */}
            <Box
              sx={{
                pl: 8,
                pr: 8,
                pb: 2,
                flexDirection: "column",
                // minHeight: "60vh",
                alignItems: "center",
                margin: 3,
              }}
              elevation={3}
            >
              {/* Project Title */}
              <Typography
                variant="h3"
                color="primary"
                gutterBottom
                sx={{ textAlign: "left" }}
              >
                Hakai Ecological Information Management System (EIMS)
              </Typography>

              {/* Tags */}
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "left",
                  // margin: 2,
                }}
              >
                {[
                  "JavaScript",
                  "React",
                  "Redux",
                  "Node",
                  "Webpack",
                  "Leaflet",
                  "ObservablePlot",
                  "MUI",
                  "postgreSQL",
                  "Docker",
                ].map((tag) => (
                  <Typography
                    key={tag}
                    variant="body2"
                    color="textSecondary"
                    sx={{ marginRight: 1, marginBottom: 1 }}
                  >
                    #{tag}
                  </Typography>
                ))}
              </Box>

              {/* Description */}
              <Typography
                variant="body1"
                sx={{ textAlign: "left", marginBottom: 2 }}
              >
                The EIMS integrates a dynamic React web portal and a RESTful API
                (Node.js and Koa) to efficiently manage scientific data from a
                PostgreSQL database.
              </Typography>

              {/* List of Work */}
              <Typography variant="h6" sx={{ textAlign: "left" }}>
                What I did:
              </Typography>
              {/* Data Portal */}
              <Box
                component="ul"
                sx={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  "& li": {
                    position: "relative",
                    paddingLeft: "1em", // Adjust as necessary for alignment
                  },
                  "& li:before": {
                    content: '"•"',
                    position: "absolute",
                    left: 0, // Adjust as necessary
                  },
                }}
              >
                {[
                  "Developed and updated API endpoints, ensuring alignment with data access requirements",
                  "Updated database queries, views, and migration files to enhance functionality and support efficient data retrieval",
                  "Enhanced CI/CD pipeline by integrating Github Actions with Docker, optimizing configurations for multi-environment builds and improved deployment",
                  "Advanced error tracking and debugging capabilities by incorporating monitoring tools such as Sentry, improving reliability and operational efficiency",
                  "Enhanced functionality by integrating geospatial mapping features and dynamic charts for data visualization",
                ].map((item) => (
                  <Box component="li" key={item} sx={{ textAlign: "left" }}>
                    <Typography variant="body1">{item}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Metadata Entry Form */}
            <Box
              sx={{
                pl: 8,
                pr: 8,
                flexDirection: "column",
                alignItems: "center",
                margin: 3,
              }}
              elevation={3}
            >
              {/* Project Title */}
              <Typography
                variant="h3"
                color="primary"
                gutterBottom
                sx={{ textAlign: "left" }}
              >
                Canadian Integrated Ocean Observing System (CIOOS) Metadata
                Entry Form
              </Typography>

              {/* Tags */}
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "left",
                  // margin: 2,
                }}
              >
                {[
                  "JavaScript",
                  "React",
                  "GoogleCloudFunctions",
                  "GoogleRealtimeDatabase",
                  "GitHubActions",
                ].map((tag) => (
                  <Typography
                    key={tag}
                    variant="body2"
                    color="textSecondary"
                    sx={{ marginRight: 1, marginBottom: 1 }}
                  >
                    #{tag}
                  </Typography>
                ))}
              </Box>

              {/* Description */}
              <Typography
                variant="body1"
                sx={{ textAlign: "left", marginBottom: 2 }}
              >
                A React app improving oceanographic data access, relying on
                Flask and Google Cloud Platform for back-end services.
              </Typography>

              {/* List of Work */}
              <Typography variant="h6" sx={{ textAlign: "left" }}>
                What I did:
              </Typography>
              {/* Data Portal */}
              <Box
                component="ul"
                sx={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  "& li": {
                    position: "relative",
                    paddingLeft: "1em", // Adjust as necessary for alignment
                  },
                  "& li:before": {
                    content: '"•"',
                    position: "absolute",
                    left: 0, // Adjust as necessary
                  },
                }}
              >
                {[
                  "Crafted UI/UX designs emphasizing usability and aesthetic appeal",
                  "Implemented form controls and validation for user input management, enhancing data integrity and user experience",
                  "Improved security, reliability, and maintainability of the Google Firebase back-end through the adoption of Google’s best practices",
                  "Refined CI/CD processes and environment configs to ensure reliable operations.",
                  "Integrated with third-party APIs, expanding the capability of metadata handling.",
                  "Authored updates to documentation and systems diagrams, ensuring maintainability",
                  // ...add all the other points
                ].map((item) => (
                  <Box component="li" key={item} sx={{ textAlign: "left" }}>
                    <Typography variant="body1">{item}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
