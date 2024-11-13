# ToDo Node App with Docker

This project demonstrates a basic ToDo app using Node.js and EJS, with Docker integration for containerization.

## Docker Commands Explained

In today's class, we focused on understanding Docker commands, Dockerfile creation, and how to manage images. Below are the commands and explanations for each one:

### Dockerfile

The `Dockerfile` used to containerize the application looks like this:

```Dockerfile
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
```

#### Explanation:
1. **FROM node:18**: This line tells Docker to use the official Node.js version 18 image as the base for your app.
2. **WORKDIR /usr/src/app**: This sets the working directory for the app inside the container.
3. **COPY package*.json ./**: This copies the `package.json` and `package-lock.json` to the container for installing dependencies.
4. **RUN npm install**: This installs the Node.js dependencies from the `package.json` file.
5. **COPY . .**: This copies all your app's files into the container.
6. **EXPOSE 3000**: This exposes port 3000 to be accessible from outside the container.
7. **CMD ["node", "app.js"]**: This runs your Node.js app inside the container.

### Docker Image Commands

#### Tagging the Image

To tag the Docker image, use the following command:

```bash
docker tag todonode [username]/todonode:1.0
```

- **todonode**: The name of your image.
- **[username]/todonode:1.0**: The repository name and version tag. Replace `[username]` with your Docker Hub username.

#### Pushing the Image to Docker Hub

Once the image is tagged, you can push it to Docker Hub using:

```bash
docker push [username]/todonode:1.0
```

This command uploads the image to your Docker Hub repository, making it available for others to pull and use.

#### Pulling an Image from Docker Hub

To pull an image from Docker Hub, you can use the following command:

```bash
docker pull [username]/myapp
```

This will download the image named `myapp` from the Docker Hub repository belonging to `[username]`.

### Running the Dockerized App

To run the Dockerized ToDo Node app:

```bash
docker run -p 3000:3000 [username]/todonode:1.0
```

This will run the app and map port 3000 inside the container to port 3000 on your host machine, allowing you to access it via `http://localhost:3000`.

---

### Additional Notes
- **Docker Hub**: You can store and share Docker images using Docker Hub. Create an account on [Docker Hub](https://hub.docker.com/) to push and pull images.