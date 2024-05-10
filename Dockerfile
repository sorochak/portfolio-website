# This Dockerfile sets up a two-stage build process. 
# The first stage sets up the environment to build the React app, 
# and the second stage prepares the production environment to serve the built app using Nginx.

# Build Environment
FROM node:14.8.0-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci --silent
COPY . ./
RUN npm run build

# Production
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
CMD ["nginx", "-g", "daemon off;"]