#Set what node version use
FROM node:17-alpine
#Creates /usr/src/app path container inside (-p) create the folders if it dosent exists
RUN mkdir -p /usr/src/app
#Got to the folder before created
WORKDIR /usr/src/app
#Copy the package*(all package files) to ./ the current path before arrived
COPY server/package*.json ./
#Run yarn to install node_modules and dependencies into package json setted
RUN yarn install
#copy all the files and directories since server folder to current path inside the container
COPY server/. ./
#Shows actual image/app port will use
EXPOSE 3000
# Run the command to start node in production
# CMD [ "npm", "start" ]
# Run the command to start nodemon on dev
CMD [ "npm", "run", "dev" ]