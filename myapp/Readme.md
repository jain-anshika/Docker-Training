# MyApp with Docker

This project demonstrates a simple web application using Docker. The application serves an `index.html` file through an NGINX container.

## Project Structure

- `index.html`: A simple HTML file containing the text "hello class!"
- `Dockerfile`: The file used to containerize the application using Docker and serve the `index.html` file with NGINX.

### Dockerfile

The `Dockerfile` for this project is as follows:

```Dockerfile
FROM nginx

COPY index.html /usr/share/nginx/html
```

#### Explanation:
1. **FROM nginx**: This specifies that the base image for the container will be NGINX, a popular web server.
2. **COPY index.html /usr/share/nginx/html**: This copies the `index.html` file from your local machine to the NGINX container's HTML directory, making it the default page served by the NGINX server.

### Steps to Build and Run the Docker Container

1. **Create the project directory and files**:

   ```bash
   mkdir myapp
   echo "hello class!" > index.html
   touch Dockerfile
   ```

2. **Edit the Dockerfile**:
   Use a text editor like `nano` to write the Dockerfile:

   ```bash
   nano Dockerfile
   ```

   Paste the following content in the `Dockerfile`:

   ```Dockerfile
   FROM nginx
   COPY index.html /usr/share/nginx/html
   ```

3. **View the Dockerfile content**:

   ```bash
   cat Dockerfile
   ```

4. **Build the Docker image**:

   Build the Docker image using the following command:

   ```bash
   docker build -t myapp .
   ```

   - **-t myapp**: This tags the image with the name `myapp`.

5. **Run the Docker container**:

   To run the image and map port 8080 on your local machine to port 80 in the container:

   ```bash
   docker run -p 8080:80 myapp
   ```

6. **Access the web application**:

   Open a web browser and go to `http://localhost:8080` to view the page served by NGINX.

### Pushing the Image to Docker Hub

1. **Tag the image for Docker Hub**:

   Tag your image with your Docker Hub username and repository name:

   ```bash
   docker tag myapp jainanshika/myapp
   ```

2. **Push the image to Docker Hub**:

   Push the image to your Docker Hub repository:

   ```bash
   docker push jainanshika/myapp
   ```

   - Replace `jainanshika` with your Docker Hub username.

