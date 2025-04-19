# pull a base image
FROM node:23-alpine

# setup a default working dir in container
WORKDIR /frontend/app/

# copy config or package.json
COPY package.json /frontend/app/

# install the app deps
RUN npm install

COPY . /frontend/app/

EXPOSE 3000:3000

CMD ["npm","run","dev"]