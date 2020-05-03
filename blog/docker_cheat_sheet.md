# Docker learning

```bash
docker pull jenkins
docker run -v /home/demo:/var/jenkins_home -w /usr/src/app -volume-driver=flocker -p 8080:8080 -p 50000:50000 jenkins # -v: for volume mapping, volume-driver: for changing the storage driver for a container, -w: specifiy current working directory in container
docker run hello-world
docker run -it centos /bin/bash
docker run --name=hahah -d centos # -d for running in background, --name for giving name to container.
docker images
docker rmi ImageID
docker inspect jenkins
docker ps
docker ps -a
docker history ImageID
docker top ContainerID
docker stop ContainerID
docker rm ContainerID
docker stats ContainerID # This command is used to provide the statistics of a running container.
docker attach ContainerID # This command is used to attach to a running container.
docker exec -it ContainerID /bin/sh -c "[ -e /bin/bash ] && /bin/bash || /bin/sh" # attach to shell in container
docker pause ContainerID
docker unpause ContainerID
docker kill ContainerID
#------------------------------
docker tag imageID Repositoryname
#------------------------------
docker run -p 8080:8080 -p 50000:50000 jenkins
```

## nsenter

take a look at [nsenter](https://github.com/jpetazzo/nsenter)

used to enter the container
use docker-enter after installation to enter the container.

## docker file

```bash
docker build -t ImageName:TagName dir
```

`-t − is to mention a tag to the image`

`ImageName − This is the name you want to give to your image.`

`TagName − This is the tag you want to give to your image.`

`Dir − The directory where the Docker File is present.`

## docker tag

```bash
docker tag imageID Repositoryname
```

* **imageID** − `This is the ImageID which needs to be tagged to the repository.`

* **Repositoryname −** `This is the repository name to which the ImageID needs to be tagged to.`

## publish to docker repo

```bash
docker build -t registry.gitlab.com/anon_social_app/docker-test .
docker login registry.gitlab.com # then enter the credentials
docker push registry.gitlab.com/anon_social_app/docker-test
```


## Docker - Instruction Commands

* **CMD:** execute a command at runtime when the container is executed.

```bash
CMD command param1
```

* **ENTRYPOINT:** can also be used to execute commands at runtime for the container. But we can be more flexible with the ENTRYPOINT command.

```bash
ENTRYPOINT command param1
```

* **ENV:** This command is used to set environment variables in the container.

```bash
ENV key value
```

* **WORKDIR:**  set the working directory of the container (If the directory does not exist, it will be added.).

```bash
WORKDIR dirname
```

## Docker - Storage

Docker has multiple storage drivers that allow one to work with the underlying storage devices.

to see current driver run `docker info` and look at "Storage Driver"

### Data Volumes

attach host volume to docker volume.

to see image volumes, run `docker inspect ubuntu > tmp.txt` and check for Volumes.

to attach volume to container:

```bash
sudo docker run –d –v /home/demo:/var/jenkins_home –p 8080:8080 –p 50000:50000 jenkins
```

### Changing the Storage Driver for a Container

use `-volume-driver=flocker` with the run command.

### Creating a Volume

```bash
docker volume create –-name=volumename –-opt options
```

* **name −** This is the name of the volume which needs to be created.

* **opt −** These are options you can provide while creating the volume.

ex: `sudo docker volume create –-name = demo –opt o = size = 100m`

### Listing all the Volumes

```bash
docker volume ls
```

## Docker - Networking

### Listing All Docker Networks

`docker network ls`

### Inspecting a Docker network

`docker network inspect networkname`

### Creating Your Own New Network

```bash
docker network create --driver drivername name
```

* **drivername −** This is the name used for the network driver.
* **name −** This is the name given to the network.

You can now attach the new network when launching the container:

```bash
sudo docker run -it -network=new_nw ubuntu:latest /bin/bash
```

## Docker - Logging

### Daemon Logging

logging lever:

* **Debug −** It details all the possible information handled by the daemon process.

* **Info −** It details all the errors + Information handled by the daemon process.

* **Errors −** It details all the errors handled by the daemon process.

* **Fatal −** It only details all the fatal errors handled by the daemon process.

try:

```bash
sudo service docker stop
sudo dockerd –l debug & #  –l option is used to specify the logging level.
```

### Container Logging

`Docker logs containerID`

## Docker compose

use compose 2 in production and 3 for compatibility with swarm.

**tutorials:**

[tutorial link](https://takacsmark.com/docker-compose-tutorial-beginners-by-example-basics/)

https://docs.docker.com/compose/production/

https://medium.com/softonic-eng/docker-compose-from-development-to-production-88000124a57c

https://blog.cloud66.com/10-tips-for-docker-compose-hosting-in-production/

https://blog.cloud66.com/10-tips-for-docker-compose-hosting-in-production/

## important links

[from development to deployment with docker](https://masterzendframework.com/docker-from-development-to-deployment/)

## Swarm

<https://takacsmark.com/docker-swarm-tutorial-for-beginners/>
<https://rominirani.com/docker-swarm-tutorial-b67470cf8872>
<https://docs.docker.com/engine/swarm/swarm-tutorial/>