import AWS from "aws-sdk";
const ses = new AWS.SES({ region: "us-east-1" });

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */

export const lambdaHandler = async (event, context) => {
  console.log("Lambda function started");
  const body = {
    name: "Agustin",
    email: "hi@ilovemexico.com",
    message: "I love Mexico",
  };

  const params = {
    Destination: {
      ToAddresses: ["austensorochak@gmail.com"], // The email address to receive the messages
    },
    Message: {
      Body: {
        Text: {
          Data: `Name: ${body.name}\nEmail: ${body.email}\nMessage: ${body.message}`,
        },
      },
      Subject: { Data: "New Contact Form Submission" },
    },
    Source: "austensorochak@gmail.com", // Your verified email address in SES
    ReplyToAddresses: [body.email], // User's email address for easy reply
  };

  try {
    await ses.sendEmail(params).promise();
    console.log("Lambda function finished");
    return {
      statusCode: 200,
      body: JSON.stringify({
        body: JSON.stringify({ message: "Email sent successfully" }),
      }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error sending email", err }),
    };
  }
};
