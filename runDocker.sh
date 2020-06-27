#!/bin/bash

docker rm -f box-rest
docker build -t box-rest .
docker run -it -p 3000:3000 -d --name=box-rest box-rest
docker logs -f box-rest
