#!/bin/bash
echo `cat /dev/urandom | base64 | fold -w 8 | head -n 1` > ./app/passwd.txt
passwd=`head -n 1 ./app/passwd.txt | tail -n 1`
sudo htpasswd -c -b /etc/nginx/.htpasswd "hal-tokyo-user" $passwd
sudo chmod 644 /etc/nginx/.htpasswd 
docker-compose run --rm slack node index.js
