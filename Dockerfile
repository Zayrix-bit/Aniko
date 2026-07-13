# Use an official Node runtime as a parent image
FROM node:18-bullseye-slim

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Set PORT environment variable for Hugging Face (default is 7860)
ENV PORT=7860

# Expose the port the app runs on
EXPOSE 7860

# Command to run the application
CMD ["npm", "start"]
