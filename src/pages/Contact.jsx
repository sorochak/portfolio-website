import React, { useState, useMemo } from "react";
import {
  Typography,
  Container,
  Grid,
  Button,
  TextField,
  Box,
} from "@mui/material";
import validate from "validate.js";
import backgroundImage from "../static/nayuca.webp";
import useSharedStyles from "../hooks/useSharedStyles";
import * as Sentry from "@sentry/react"; // Import Sentry

const Contact = () => {
  const { isMobileLandscape, childBoxBackgroundColor, textShadow } =
    useSharedStyles();

  /**
   * `formState` stores the state of the contact form, which includes:
   * - `isValid`: Whether the form is valid or not.
   * - `values`: An object containing the current values of form fields.
   * - `touched`: Tracks which fields have been interacted with.
   * - `errors`: Stores validation errors for each form field.
   */
  const [formState, setFormState] = useState({
    isValid: false,
    values: { name: "", email: "", message: "", userCode: "" },
    touched: {},
    errors: {},
  });

  // State to handle the status message of the "Send" button.
  // It updates to show different messages like "Send," "Just a moment...," or error messages.
  const [sendingStatus, setSendingStatus] = useState("Send");

  // Lambda API endpoint to which the form data will be sent.
  const contactEndpoint =
    "https://sbanydhmje.execute-api.us-east-1.amazonaws.com/Prod/contact";

  /**
   * `schema` defines validation rules for each form field using `validate.js`.
   * - `name`: Must be present and under 128 characters.
   * - `email`: Must be present, a valid email address, and under 300 characters.
   * - `message`: Must be present (not empty).
   * The useMemo hook ensures that the validation schema is only created once
   */
  const schema = useMemo(
    () => ({
      name: {
        presence: { allowEmpty: false, message: "is required" },
        length: { maximum: 128 },
      },
      email: {
        presence: { allowEmpty: false, message: "is required" },
        email: true,
        length: { maximum: 300 },
      },
      message: {
        presence: { allowEmpty: false, message: "is required" },
      },
    }),
    []
  );

  // Handles form field changes, updating the form state but not triggering validation.
  const handleChange = (e) => {
    e.persist();
    setFormState((formState) => ({
      ...formState,
      values: {
        ...formState.values,
        [e.target.name]:
          e.target.type === "checkbox" ? e.target.checked : e.target.value,
      },
      touched: {
        ...formState.touched,
        [e.target.name]: true,
      },
    }));
  };

  // Helper function to check if a form field has an error.
  const hasError = (field) =>
    formState.touched[field] && formState.errors[field] ? true : false;

  // Handles form submission via an HTTP POST request to the Lambda endpoint, validating the form first.
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform validation when the form is submitted
    const errors = validate(formState.values, schema);
    const isValid = !errors;

    setFormState((formState) => ({
      ...formState,
      isValid,
      errors: errors || {},
      touched: {
        name: true,
        email: true,
        message: true,
      },
    }));

    // Proceed only if the form is valid and honeypot field is empty.
    if (isValid && !formState.values.userCode) {
      setSendingStatus("Just a moment...");

      try {
        // Send the form data to the specified endpoint using a POST request
        const response = await fetch(contactEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formState.values),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json(); // Parse the JSON response
        setSendingStatus(data.message); // Display the server response message
        resetFormState(); // Reset the form after a successful submission
      } catch (error) {
        console.error("Error sending contact form:", error);
        Sentry.captureException(error);
        setSendingStatus("Failed to send message");
      }
    }
  };

  // Resets the form state to its initial values.
  const resetFormState = () => {
    setFormState({
      isValid: false,
      values: { name: "", email: "", message: "", userCode: "" },
      touched: {},
      errors: {},
    });
  };

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
          minHeight: {
            xs: "40vh", // For small screens
            sm: isMobileLandscape ? "100vh" : "40vh", // For landscape mode on mobile
            md: "40vh", // For medium and up screens
          },
          px: 3,
          borderBottom: 1,
          borderColor: "primary.main",
        }}
      >
        {/* Overlay box for the "Get in Touch" content */}
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
            variant="h6"
            align="center"
            sx={{
              mb: 2,
              fontWeight: 700,
              fontFamily: "Julius Sans One, Helvetica, Arial, sans-serif",
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
              textShadow: textShadow,
              textAlign: "center",
              mt: { xs: 7, md: 3 },
            }}
          >
            GET IN TOUCH
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "10px",
        }}
      >
        <Container maxWidth="md">
          <form name="contact-form" onSubmit={handleSubmit}>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12}>
                <Typography
                  variant="h4"
                  align="center"
                  sx={{
                    fontWeight: "medium",
                    margin: { sm: "20px 0px", xs: "10px 0px" },
                  }}
                >
                  Say Hello!
                </Typography>
              </Grid>
              {/* Honeypot field */}
              <TextField
                sx={{ position: "absolute", left: "-5000px" }}
                aria-hidden="true"
                placeholder="Code"
                name="userCode"
                id="userCode"
                value={formState.values.userCode || ""}
                onChange={handleChange}
              />
              {/* Input field for the Name */}
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  placeholder="Name"
                  label="Name *"
                  variant="outlined"
                  size="medium"
                  name="name"
                  id="name"
                  value={formState.values.name || ""}
                  helperText={
                    hasError("name") ? formState.errors.name[0] : null
                  }
                  error={hasError("name")}
                  onChange={handleChange}
                />
              </Grid>
              {/* Input field for the Email */}
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  placeholder="E-mail"
                  label="E-mail *"
                  variant="outlined"
                  size="medium"
                  name="email"
                  id="email"
                  type="text" // Changed from "email" to "text"
                  helperText={
                    hasError("email") ? formState.errors.email[0] : null
                  }
                  error={hasError("email")}
                  onChange={handleChange}
                  value={formState.values.email || ""}
                />
              </Grid>
              {/* Input field for the Message */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  placeholder="Message"
                  label="Message *"
                  variant="outlined"
                  size="medium"
                  name="message"
                  id="message"
                  multiline
                  rows={4}
                  helperText={
                    hasError("message") ? formState.errors.message[0] : null
                  }
                  error={hasError("message")}
                  value={formState.values.message || ""}
                  onChange={handleChange}
                />
              </Grid>
              {/* Submit button to send the form data */}
              <Grid item xs={12}>
                <Button
                  fullWidth
                  size="large"
                  variant="contained"
                  type="submit"
                  color="primary"
                >
                  {sendingStatus}
                </Button>
              </Grid>
            </Grid>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default Contact;
