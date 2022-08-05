docker build -t talkativepro_image .
docker stop talkativepro
docker rm talkativepro
docker run --name talkativepro --restart=always -p 3000:3000 -d talkativepro_image