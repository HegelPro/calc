# Calc 3000

It's my realize calculator

## Getting Started

Clone the repositorie for your own machine

```
git clone https://github.com/HegelPro.git
```

### Installing

You must install docker https://www.docker.com/get-docker

## Running the tests

Entre in folder with dockerfile and create a docker image 

```
docker build -t "user_name/image_name"
```

Run a docker container

```
docker run -p "out_port:server_port" "user_name/image_name" 
```

Visit your site for http://localhost:"out_port"

## Was using patterns

# MVC - base stract of project

```
-Controller.js
-Model.js
-View.js
```
# Facade - all project create after command

```
index.js

new classController(elementCalc)
```

# Module - Common.js


## Authors

* **Lev Palkin** - [HegelPro](https://github.com/HegelPro)