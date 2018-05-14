FROM node:8.9.4

RUN mkdir -p /usr/src/app && cd /usr/src/app
ADD package.json /usr/src/app/package.json

WORKDIR usr/src/app
ADD . /usr/src/app
RUN npm install
# RUN npm install --silent --progress=false

RUN npm run build
RUN rm -rf ./build
RUN rm -rf ./src

EXPOSE 3000

CMD ["npm" "start"]
