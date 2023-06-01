#!/bin/bash
echo "> nginx 재실행"
sudo systemctl stop nginx
sudo systemctl start nginx
