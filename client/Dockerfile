FROM node:17-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the application code to the container
COPY package*.json .
# Install required packages
RUN npm install

COPY . .

EXPOSE 3000
RUN ls -l

# Specify the command to run
CMD ["npm", "start"]