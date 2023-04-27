FROM halverneus/static-file-server

WORKDIR /app

COPY /build/. .

EXPOSE 80

CMD ["PORT=80","FOLDER=.","./serve"]
