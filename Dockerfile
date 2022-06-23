FROM node:16.14.2
WORKDIR /app
COPY package.json /app
RUN npm install 
COPY . /app
CMD ["npm","start "]
