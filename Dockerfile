FROM node:8

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app


# Copying all the files from your file system to container file system
COPY package*.json /usr/src/app/
COPY api /usr/src/app/api
COPY config /usr/src/app/config
COPY db /usr/src/app/db
COPY .env /usr/src/app/.env
COPY app.js /usr/src/app/app.js

# Install all dependencies
RUN npm install
RUN npm install -g swagger

# Expose the port
EXPOSE 3000

CMD [ "swagger", "project", "start" ]
