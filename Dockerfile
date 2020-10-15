FROM node:10

WORKDIR .

RUN git clone https://github.com/aaneas/m2-workshops-td5.git . \
    && npm install

EXPOSE 27017

CMD [ "node", "js/index.js" ]
