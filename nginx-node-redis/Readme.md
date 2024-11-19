# Docker Multi-Container Setup

This project demonstrates how to set up a multi-container application using Docker with `nginx`, `web`, and `redis` services. We'll use Docker networking to allow communication between containers.

## Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/dockersamples/nginx-node-redis.git
cd nginx-node-redis
```

## Prerequisites

- Docker installed on your system
- Docker Compose (optional, for easier management)

---

## Step 1: Build Docker Images

### 1.1 Build the `nginx` Image

Navigate to the `nginx` directory and build the Docker image:

```bash
cd nginx
cat Dockerfile
docker build -t nginx .
```

- **Explanation**: 
  - `docker build -t nginx .` creates a Docker image named `nginx` using the Dockerfile in the current directory (`.`).
  - `-t nginx` assigns a tag (`nginx`) to the built image.

### 1.2 Build the `web` Image

Navigate to the `web` directory and build the Docker image:

```bash
cd ../web
cat Dockerfile
docker build -t web .
```

- **Explanation**: 
  - Similar to the previous step, this builds a Docker image named `web` using the Dockerfile in the `web` directory.

---

## Step 2: Create a Docker Network

Create a custom Docker network to allow containers to communicate with each other:

```bash
docker network create sample-app
```

- **Explanation**:
  - `docker network create sample-app` creates a bridge network named `sample-app`.

---

## Step 3: Run the `redis` Container

Start a `redis` container and connect it to the custom network:

```bash
docker run -d --name redis --network sample-app --network-alias redis redis
```

- **Explanation**:
  - `-d` runs the container in detached mode (in the background).
  - `--name redis` assigns a name to the container.
  - `--network sample-app` connects it to the `sample-app` network.
  - `--network-alias redis` allows other containers to reach it using the alias `redis`.

### Verify Running Containers

```bash
docker ps
```

---

## Step 4: Run the `web` Containers

Start two instances of the `web` container:

```bash
docker run -d --name web1 -h web1 --network sample-app --network-alias web1 web
docker run -d --name web2 -h web2 --network sample-app --network-alias web2 web
```

- **Explanation**:
  - `-h web1` and `-h web2` set the hostname for the containers.
  - These containers are also connected to the `sample-app` network and can communicate with each other using their aliases.

---

## Step 5: Run the `nginx` Container

Start the `nginx` container with port forwarding:

```bash
docker run -d --name nginx --network sample-app -p 80:80 nginx
```

- **Explanation**:
  - `-p 80:80` maps port 80 on your local machine to port 80 in the `nginx` container.
  - This makes the `nginx` service accessible via `http://localhost`.

### Check Running Containers

```bash
docker ps
```

---

## Step 6: Use Docker Compose (Optional)

You can also manage all containers using Docker Compose for easier setup.

### Create a `docker-compose.yml` File

Ensure your `docker-compose.yml` file includes all services (`nginx`, `web1`, `web2`, and `redis`).

### Start All Services with Docker Compose

```bash
docker compose up -d --build
```

- **Explanation**:
  - `up -d` starts all services defined in `docker-compose.yml` in detached mode.
  - `--build` rebuilds images before starting the containers.

---

## Step 7: Access the Application

With everything up and running, you can open [http://localhost](http://localhost) in your browser to see the site.

Refresh the page several times to see which host handles your request:

```
web2: Number of visits is: 9
web1: Number of visits is: 10
web2: Number of visits is: 11
web1: Number of visits is: 12
```

---

## Troubleshooting: Check Open Ports

If you encounter errors related to port allocation, verify which ports are currently in use:

```bash
docker ps
```

This command helps ensure that port 80 is allocated correctly.

---

## Conclusion

You have successfully set up a multi-container application using Docker and Docker Compose. Your `nginx`, `web`, and `redis` services are now running and networked together.
