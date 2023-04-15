FROM node:17-alpine

RUN npm install -g nodemon
# Set the working directory in the container
WORKDIR /index

# Copy the application code to the container
COPY package*.json .
# Install required packages
RUN npm install

COPY . .

EXPOSE 5000
RUN ls -l

# Specify the command to run
CMD ["npm", "dev"]