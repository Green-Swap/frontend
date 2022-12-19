FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Vue.js application
RUN npm run build

# Expose the application on port 8080
EXPOSE 7173

# Start the application
CMD ["npm", "run", "dev"]