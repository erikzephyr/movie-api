
#!/bin/bash
docker build -t erikzephyr/express-rest-es2018-boilerplate .
docker push erikzephyr/express-rest-es2018-boilerplate

ssh deploy@$DEPLOY_SERVER << EOF
docker pull erikzephyr/express-rest-es2018-boilerplate
docker stop api-boilerplate || true
docker rm api-boilerplate || true
docker rmi erikzephyr/express-rest-es2018-boilerplate:current || true
docker tag erikzephyr/express-rest-es2018-boilerplate:latest erikzephyr/express-rest-es2018-boilerplate:current
docker run -d --restart always --name api-boilerplate -p 3000:3000 erikzephyr/express-rest-es2018-boilerplate:current
EOF 