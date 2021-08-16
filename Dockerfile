# Use an existing docker image as a base
FROM node:alpine

# Download and install the dependency
WORKDIR /usr/app
COPY ./package.json ./
RUN npm install
COPY ./ ./
# Tell the image what to do when it starts as a container
CMD [ "npm","start" ]