# Use an official Node.js runtime as a parent image
FROM node:18.17.0

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Run the addAdmin.js script to add admin
RUN node addAdmin.js

# Expose the port the app runs on
EXPOSE 9000

# Start the application
CMD ["npm", "run", "dev"]