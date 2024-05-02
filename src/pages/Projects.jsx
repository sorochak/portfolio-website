import { Box, Typography, Container, Grid, Paper } from "@mui/material";

const Projects = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        padding: 3, // Adjust the overall padding as needed
        marginTop: 5,
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
            <Paper
              sx={{
                padding: 8,
                flexDirection: "column",
                minHeight: "60vh",
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
                Hakai Data Portal
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
                  "React",
                  "Redux",
                  "Chai",
                  "Docker",
                  "Leaflet",
                  "ObservablePlot",
                  "Node",
                  "postgreSQL",
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
                The Hakai Data Portal is an internal dynamic React web
                application designed to facilitate the management and
                distribution of scientific data. Integrating with the Hakai-API,
                which provides access to data in JSON format, directly from the
                Hakai EIMS (Ecological Information Management System) PostgreSQL
                database. Primarily serving researchers and data analysts, the
                portal simplifies the process of incorporating vast datasets
                into scripts for statistical analysis, eliminating the need for
                pre-downloading. It's an essential tool for scientific
                researchers, optimizing data handling and accessibility to
                empower discovery and innovation.
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
                  "Developed eight features for Reach by using React, Redux, and Material UI",
                  "Implemented testing strategies with Chai and Mocha",
                  "",
                  // ...add all the other points
                ].map((item) => (
                  <Box component="li" key={item} sx={{ textAlign: "left" }}>
                    <Typography variant="body1">{item}</Typography>
                  </Box>
                ))}
              </Box>
            </Paper>

            {/* Metadata Entry Form */}
            <Paper
              sx={{
                padding: 8,
                flexDirection: "column",
                minHeight: "60vh",
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
                Metadata Entry Form
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
                  "React",
                  "Redux",
                  "Chai",
                  "Docker",
                  "Leaflet",
                  "ObservablePlot",
                  "Node",
                  "postgreSQL",
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
                The Hakai Data Portal is an internal dynamic React web
                application designed to facilitate the management and
                distribution of scientific data. Integrating with the Hakai-API,
                which provides access to data in JSON format, directly from the
                Hakai EIMS (Ecological Information Management System) PostgreSQL
                database. Primarily serving researchers and data analysts, the
                portal simplifies the process of incorporating vast datasets
                into scripts for statistical analysis, eliminating the need for
                pre-downloading. It's an essential tool for scientific
                researchers, optimizing data handling and accessibility to
                empower discovery and innovation.
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
                  "Developed eight features for Reach by using React, Redux, and Material UI",
                  "Implemented testing strategies with Jest and React Testing Library",
                  // ...add all the other points
                ].map((item) => (
                  <Box component="li" key={item} sx={{ textAlign: "left" }}>
                    <Typography variant="body1">{item}</Typography>
                  </Box>
                ))}
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
