# express-rest-es2017-boilerplate
⌛️ Express boilerplate for building RESTful APIs

## Features



## Requirements

 - [Node v7.6+](https://nodejs.org/en/download/current/) or [Docker](https://www.docker.com/)
 - [Yarn](https://yarnpkg.com/en/docs/install)

## Getting Started

Clone the repo and make it yours:

```bash
git clone https://github.com/erikzephyr/express-rest-es2017-boilerplate
cd express-rest-es2017-boilerplate
rm -rf .git
```

Install dependencies:

```bash
npm install
```

Set environment variables:

```bash
cp .env.example .env
```


## Running Locally

```bash
npm dev
```

## Running in Production

```bash
npm start
```

## Lint

```bash
# lint code with ESLint
npm lint

# try to fix ESLint errors
npm lint:fix

# lint and watch for changes
npm lint:watch
```

## Test

```bash
# run all tests
npm test

# run all tests and watch for changes
npm test:watch

# open nyc test coverage reports
npm coverage
```

## Validate

```bash
# run lint and tests
npm validate
```

## Logs

```bash
# show logs in production
pm2 logs
```

## Documentation

```bash
# generate and open api documentation
npm docs
```

## Docker

```bash
# run container locally
npm docker:dev
or
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up

# run container in production
npm docker:prod
or
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up

# run tests
npm docker:test
or
docker-compose -f docker-compose.yml -f docker-compose.test.yml up
```

## Deploy

Set your server ip:

```bash
DEPLOY_SERVER=127.0.0.1
```

Replace my Docker username with yours:

```bash
vim deploy.sh
```

Run deploy script:

```bash
yarn deploy
or
sh ./deploy.sh
```

## Tutorials

## Inspirations

## Credits

## License

[MIT License](README.md) - [Erik Zephyr](https://github.com/erikzephyr)