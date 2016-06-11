FROM clojure:latest
COPY . /usr/src/app
WORKDIR /usr/src/app

EXPOSE 9000

CMD ["lein", "run", "migrate", "&&","lein", "run"]
