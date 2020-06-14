# box-rest

## Deploy Docker mongo container
### Mongo container without authentication
1. docker pull mongo
2. docker run --name mongo -d mongo

### Mongo container using authentication
1. docker pull mongo
2. docker run --name mongo -e MONGO_INITDB_ROOT_USERNAME=root -e MONGO_INITDB_ROOT_PASSWORD=root -d mongo

## Deploy Docker mongo-express container
### Mongo-Express container without authentication
1. docker pull mongo-express
2. docker run -e ME_CONFIG_MONGODB_SERVER=172.17.0.2 --name mongo-express -d -p 8081:8081 mongo-express

### Mongo-Express container using authentication
1. docker pull mongo-express
2. docker run -e ME_CONFIG_MONGODB_SERVER=172.17.0.2 -e ME_CONFIG_MONGODB_ADMINUSERNAME="root" -e ME_CONFIG_MONGODB_ADMINPASSWORD="root" -e ME_CONFIG_MONGODB_ENABLE_ADMIN="true" --name mongo-express -d -p 8081:8081 mongo-express

## Deploy Docker box-rest container
### Build
- docker build -t box-rest .
### Deploy
- docker run -it -p 3000:3000 -d --name=box-rest box-rest
