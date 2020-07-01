# Specifies where to get the base image (Node v12 in our case) and creates a new container for it
FROM node:12.17

# Set working directory. Paths will be relative this WORKDIR.
WORKDIR /HomePage

# Install dependencies
COPY package.json /HomePage
RUN npm install

# Copy source files from host computer to the container
COPY . /HomePage


# Specify port app runs on
EXPOSE 5006

# Run the app
CMD node server.js

# # Build the app
# RUN npm start



