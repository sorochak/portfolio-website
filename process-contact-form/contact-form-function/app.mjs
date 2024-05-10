import AWS from "aws-sdk";
const ses = new AWS.SES({ region: "us-east-1" });

/**
 * Lambda function handler for processing contact form submissions.
 *
 * @param {Object} event - The event object containing the request details.
 * @param {Object} context - The context object containing runtime information.
 *
 * @returns {Object} - The response object containing the result of the function execution.
 */

export const lambdaHandler = async (event, context) => {
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

  try {
    await ses.sendEmail(params).promise();
    console.log("Lambda function finished");
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:3000",
      },
      body: JSON.stringify({ message: "Email sent successfully" }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:3000",
      },
      body: JSON.stringify({ message: "Error sending email", err }),
    };
  }
};
