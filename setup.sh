#!/usr/bin/env bash
docker pull mysql:5.6
docker run --name mysql -e MYSQL_ROOT_PASSWORD=mysqlpw -p 3306:3306 -d mysql:5.6