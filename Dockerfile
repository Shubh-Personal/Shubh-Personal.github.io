FROM halverneus/static-file-server

ENV port=80
ENV cors=false

WORKDIR /app

COPY /build .

EXPOSE 80

CMD ["./serve"]
