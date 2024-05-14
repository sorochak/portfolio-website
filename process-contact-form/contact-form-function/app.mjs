import AWS from "aws-sdk";
import * as Sentry from "@sentry/aws-serverless";
const ses = new AWS.SES({ region: "us-east-1" });

const allowedOrigin = "https://austensorochak.com";

Sentry.init({
  dsn: "https://d5c73a735dc90559994a96cbf3fefc07@o4507252884045824.ingest.us.sentry.io/4507256861294592",
  // Performance Monitoring
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Set sampling rate for profiling - this is relative to tracesSampleRate
  profilesSampleRate: 1.0,
});

/**
 * Lambda function handler for processing contact form submissions.
 *
 * @param {Object} event - The event object containing the request details.
 * @param {Object} context - The context object containing runtime information.
 *
 * @returns {Object} - The response object containing the result of the function execution.
 */

export const lambdaHandler = Sentry.wrapHandler(async (event, context) => {
  console.log("Lambda function started");

  const { name, email, message } = JSON.parse(event.body);

  const params = {
    Destination: {
      ToAddresses: ["austensorochak@gmail.com"], // The email address to receive the messages
    },
    Message: {
      Body: {
        Text: {
          Data: `New Contact Form Submission\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
        },
      },
      Subject: { Data: `New Contact Form Submission from ${name}` },
    },
    Source: "austensorochak@gmail.com", // Your verified email address in SES
    ReplyToAddresses: [email], // User's email address for easy reply
  };

  const responseHeaders = {
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST,OPTIONS",
    "Access-Control-Allow-Origin": allowedOrigin,
  };

  try {
    await ses.sendEmail(params).promise();
    console.log("Lambda function finished");
    return {
      statusCode: 200,
      headers: responseHeaders,
      body: JSON.stringify({ message: "Email sent successfully" }),
    };
  } catch (err) {
    Sentry.captureException(err);
    return {
      statusCode: 500,
      headers: responseHeaders,
      body: JSON.stringify({ message: "Error sending email", err }),
    };
  }
});
