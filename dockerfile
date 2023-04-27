FROM halverneus/static-file-server

WORKDIR /app

COPY /build .

CMD ["./serve"]
