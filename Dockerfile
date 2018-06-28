FROM ubuntu

MAINTAINER Lev Palkin <palkin.leo@gmail.com>

RUN apt-get update \
    && apt-get install -y nodejs \
    && apt-get install -y npm

ADD /Code /Code

WORKDIR /Code
RUN npm install

EXPOSE 8080

CMD ["npm", "start"]