# Use the official Node.js 18 image as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy all the remaining application files
COPY . .

# Expose the application port
EXPOSE 3000

# Run the application
CMD ["node", "app.js"]
