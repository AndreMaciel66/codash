# Origin Image
FROM node:15-alpine

# Working directory (where the application will live inside the container)
WORKDIR /app

# Adding `/app/node_modules/.bin` para o $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Installing all the dependencies of the application and cached
COPY package.json /app/package.json
RUN npm install -g npm@7.6.3
RUN npm install --silent
RUN npm install react-scripts@4.0.3 -g --silent

# Copy app files
COPY . ./
EXPOSE 3000

# start app
CMD ["yarn", "start"]