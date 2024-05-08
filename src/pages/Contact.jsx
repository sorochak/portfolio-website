import React, { useState, useEffect, useMemo } from "react";
import { Typography, Container, Grid, Button, TextField } from "@mui/material";
import validate from "validate.js";


const Contact = () => {
  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {},
  });

  const [sendingStatus, setSendingStatus] = useState("Send");

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

  const hasError = (field) =>
    formState.touched[field] && formState.errors[field] ? true : false;

  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   setSendingStatus("Just a moment...");

  //   emailjs
  //     .sendForm(
  //       REACT_APP_EMAILJS_SERVICEID,
  //       REACT_APP_EMAILJS_TEMPLATEID,
  //       e.target,
  //       REACT_APP_EMAILJS_PUBLICKEY
  //     )
  //     .then((res) => {
  //       console.log("SUCCESS!", res.status, res.text);
  //       setSendingStatus("Message Sent Successfully");
  //     })
  //     .catch((error) => {
  //       console.log("FAILED...", error);
  //       setSendingStatus("Send");
  //     });
  // };

  useEffect(() => {
    const errors = validate(formState.values, schema);
    setFormState((formState) => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {},
    }));
  }, [formState.values, schema]);

  return (
    <>
      <Container maxWidth="md">
        <form name="contact-form" onSubmit={}>
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
    </>
  );
};

export default Contact;
