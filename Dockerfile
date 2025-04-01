# Step 1: Use an official Node.js image as a base
FROM node:20-alpine

# Step 2: Set the working directory in the container
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json to the container
COPY package*.json ./

# Step 4: Install the dependencies
RUN npm install

# Step 5: Copy the rest of the application files from the api folder
COPY ./api ./

# Step 6: Expose the port the app will run on
EXPOSE 3000

# Step 7: Start the app, make sure it uses the correct entry point (index.js)
CMD ["node", "index.js"]
