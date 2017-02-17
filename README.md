# myservice
This application was generated using JHipster 4.0.2, you can find documentation and help at [https://jhipster.github.io/documentation-archive/v4.0.2](https://jhipster.github.io/documentation-archive/v4.0.2).

## Development

To start your application in the dev profile, simply run:

    ./mvnw


For further instructions on how to develop with JHipster, have a look at [Using JHipster in development][].


## Building for production

To optimize the myservice application for production, run:

    ./mvnw -Pprod clean package

To ensure everything worked, run:

    java -jar target/*.war


Refer to [Using JHipster in production][] for more details.

## Testing

To launch your application's tests, run:

    ./mvnw clean test

For more information, refer to the [Running tests page][].

## Using Docker to simplify development (optional)

You can use Docker to improve your JHipster development experience. A number of docker-compose configuration are available in the `src/main/docker` folder to launch required third party services.
For example, to start a postgresql database in a docker container, run:

    docker-compose -f src/main/docker/postgresql.yml up -d

To stop it and remove the container, run:

    docker-compose -f src/main/docker/postgresql.yml down

You can also fully dockerize your application and all the services that it depends on.
To achieve this, first build a docker image of your app by running:

    ./mvnw package -Pprod docker:build

Then run:

    docker-compose -f src/main/docker/app.yml up -d

For more information refer to [Using Docker and Docker-Compose][], this page also contains information on the docker-compose sub-generator (`yo jhipster:docker-compose`), which is able to generate docker configurations for one or several JHipster applications.

## Continuous Integration (optional)

To set up a CI environment, consult the [Setting up Continuous Integration][] page.

[JHipster Homepage and latest documentation]: https://jhipster.github.io
[JHipster 4.0.2 archive]: https://jhipster.github.io/documentation-archive/v4.0.2

[Using JHipster in development]: https://jhipster.github.io/documentation-archive/v4.0.2/development/
[Using Docker and Docker-Compose]: https://jhipster.github.io/documentation-archive/v4.0.2/docker-compose
[Using JHipster in production]: https://jhipster.github.io/documentation-archive/v4.0.2/production/
[Running tests page]: https://jhipster.github.io/documentation-archive/v4.0.2/running-tests/
[Setting up Continuous Integration]: https://jhipster.github.io/documentation-archive/v4.0.2/setting-up-ci/


# newservice
