# Reign Challenge
#### Run guide

To run this project is necesary:

1) Build a Mongo database and add the configuracion string connection to the enviroment variable.

> The database string in the .env is a test database is a development mongo database that still work if it wish to used it.

2) Run the Dockerfile of the folder that contain the project.

In the main folder run the following commands:

     docker build -t reign-challenge .
     docker run -d -p 4000:4000 reign-challenge

##### Note

> In case of error in windows, when executing the docker build.
> Run:

     export DOCKER_BUILDKIT=0
     export COMPOSE_DOCKER_CLI_BUILD=0

##### Aplication usage

After to run the container succefully (this can be confirm viewing the message in server console), It can access to the API using POSTMAN.

The Routes to verify this is:

/api/news

With three query parars:

1) From : Position of the first result (to paginate).
2) Limit:  Limit of quantity of the result (five by default).
3) Filter: The filter to search by author, title or tag.

Example:
/api/news?from=3&limit=4?filter=story_32334455

Test whit the [postman collection](https://www.getpostman.com/collections/e1cbc74bf930dd31e806) of this guide.

To delete a element from the database, is necesary call the endpoint /news/:id with the method "DELETE".

Example:
/api/news/32338334

###### Developed by Farhid Cortés Zambra