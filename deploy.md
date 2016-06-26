#Deploying the API

`lein uberjar` will build the jar file at /target/app.jar

Copy the Jar to the server.

`scp target/app.jar root@104.131.175.67:/var/app/porios/`

SSH into the server

`ssh root@104.131.175.67`

`cd /var/app/porios/`

If you have new migrations...

`./run.sh --migrate`

else

`./run.sh`
