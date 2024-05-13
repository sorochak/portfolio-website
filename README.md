# Portfolio Website

This is the repository for my personal portfolio website, hosted at [austensorochak.com](https://austensorochak.com). The website is a React application that showcases my projects, skills, and contact information.

## Table of Contents

1. [Description](#description)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Installation](#installation)
5. [Running the Application](#running-the-application)
6. [Deployment](#deployment)

## Description

This portfolio website is designed to provide an overview of my work and skills as a software developer. It includes sections for projects, a contact form, and some professional details.

## Features

- **React Application**: Built with React and React Router for navigation.
- **Dockerized Setup**: Configured to run in a Docker container with an Nginx web server.
- **Continuous Deployment**: Automated deployment to an AWS S3 bucket on push to the main branch.
- **Serverless Contact Form**: Uses AWS Lambda and API Gateway for handling contact form submissions.
- **Google Analytics**: Integrated for tracking and analyzing visitor data.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **React Router**: For routing within the application.
- **Docker**: For containerizing the application.
- **Nginx**: Web server used in the Docker container.
- **AWS S3**: For hosting the deployed application.
- **AWS Lambda & API Gateway**: For serverless backend services.
- **AWS SAM**: For local testing and deployment of serverless functions.
- **Google Analytics**: For tracking website analytics.

## Installation

### Prerequisites

- Node.js (v14 or higher)
- Docker (if you want to run the app in a container)
- AWS CLI (for deployment)
- SAM CLI (for testing serverless functions locally)

### Clone the Repository

```sh
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### Install Dependencies

```sh
npm install
```

## AWS Credentials

To deploy the application to AWS S3 and for the serverless infrastructure, you need to configure your AWS credentials. Make sure you have the AWS CLI installed and configured with your AWS credentials:

```sh
aws configure
```

You will be prompted to enter your AWS Access Key ID, Secret Access Key, Default Region, and Default Output format. Ensure that you have the necessary permissions to deploy to S3 and manage Lambda functions.

## Running the Application

### Running Locally

To run the application locally:

```sh
npm start
```

This will start the React development server. Open your browser and navigate to http://localhost:3000 to view the website.

### Running in Docker

To run the application in a Docker container:

- Build the Docker image

```sh
docker build -t portfolio-website .
```

- Run the Docker container:

```sh
docker run -p 80:80 portfolio-website
```

Open your browser and navigate to http://localhost to view the website running in the Docker container.

## Deployment

The application is configured for continuous deployment using GitHub Actions. On every push to the main branch, the workflow builds and pushes the React app to an AWS S3 bucket.

### Manual Deployment

To manually deploy the application to AWS S3:

- Build the React app:

```sh
npm run build
```

- Sync the build folder with your S3 bucket:

```sh
aws s3 sync build/ s3://your-bucket-name --delete
```

### Serverless Contact Form Deployment

The contact form is implemented using AWS serverless infrastructure. The related files are located in the process-contact-form directory.

1. Navigate to the process-contact-form/contact-form-function directory and install dependencies:

```sh
cd process-contact-form
npm install
```

Deploy the serverless function:

```sh
sam deploy --guided
```

Follow the prompts to deploy the function.

Thank you for visiting my portfolio website!
