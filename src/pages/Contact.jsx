import React, { useState, useEffect, useMemo } from "react";
import {
  Typography,
  Container,
  Grid,
  Button,
  TextField,
  Box,
} from "@mui/material";
import validate from "validate.js";

const Contact = () => {
  // State object to manage the current form state, including validation.
  const [formState, setFormState] = useState({
    isValid: false,
    values: { name: "", email: "", message: "", userCode: "" }, //userCode is a honeypot field to prevent spam bots from submitting the form.
    touched: {}, // Tracks which form fields have been interacted with.
    errors: {}, // Contains validation errors for each form field.
  });

  // State to handle the status message of the "Send" button.
  const [sendingStatus, setSendingStatus] = useState("Send");

  // Lambda API endpoint to which the form data will be sent.
  const contactEndpoint =
    "https://sbanydhmje.execute-api.us-east-1.amazonaws.com/Prod/contact";

  // Form validation schema, which defines rules for each field.
  // Memoized for efficiency since it remains constant throughout the component's lifecycle.
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

  // Updates the form state whenever a field changes. Persists the event and tracks touched fields.
  const handleChange = (e) => {
    e.persist(); // Persists the event object beyond the function's execution.
    setFormState((formState) => ({
      ...formState,
      values: {
        // Updates the corresponding form field's value.
        ...formState.values,
        [e.target.name]:
          e.target.type === "checkbox" ? e.target.checked : e.target.value,
      },
      // Marks the field as touched to trigger validation.
      touched: {
        ...formState.touched,
        [e.target.name]: true,
      },
    }));
  };

  // Helper function to check if a form field has an error.
  const hasError = (field) =>
    formState.touched[field] && formState.errors[field] ? true : false;

  // Handles form submission via an HTTP POST request to the Lambda endpoint.
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the form's default submission behavior.
    if (!formState.values.userCode) {
      // Submit only if the honeypot field is empty.
      setSendingStatus("Just a moment...");

      try {
        // Sends a POST request to the Lambda endpoint with the form data.
        const response = await fetch(contactEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formState.values),
        });
        // Extracts the response data and updates the sending status.
        const data = await response.json();
        setSendingStatus(data.message);
        resetFormState(); // Resets the form fields after successful submission.
      } catch (error) {
        console.error("Error sending contact form:", error);
        setSendingStatus("Failed to send message");
      }
    }
  };

  // Resets the form state to its initial values, effectively clearing the form.
  const resetFormState = () => {
    setFormState({
      isValid: false,
      values: { name: "", email: "", message: "", userCode: "" },
      touched: {},
      errors: {},
    });
  };

  // Effect that runs form validation whenever the form values change.
  useEffect(() => {
    // Validate form values against the defined schema.
    const errors = validate(formState.values, schema);
    // Updates form state with validation results.
    setFormState((formState) => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {},
    }));
  }, [formState.values, schema]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "70px",
        height: "90vh",
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
                  mb: 2,
                  fontWeight: "bold",
                  fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
                }}
              >
                GET IN TOUCH
              </Typography>
              <Typography
                variant="h6"
                align="center"
                sx={{
                  fontWeight: "medium",
                }}
              >
                Say Hello!
              </Typography>
              <Typography
                variant="body1"
                color="textSecondary"
                align="left"
                sx={{
                  fontWeight: "regular",
                  lineHeight: 1.5,
                  mt: 1,
                }}
              >
                If you’d like to send me a message, simply fill out the form
                below or send me a message directly at info@austensorochak.com.
              </Typography>
            </Grid>
            {/* Input field for the honeypot */}
            <TextField
              sx={{ position: "absolute", left: "-5000px" }} // CSS to move the field off-screen
              aria-hidden="true" // Hide from screen readers
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
                helperText={hasError("name") ? formState.errors.name[0] : null}
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
                type="email"
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
                disabled={!formState.isValid}
              >
                {sendingStatus}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Box>
  );
};

export default Contact;
