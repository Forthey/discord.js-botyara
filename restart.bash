docker stop bot || "Bot isn't running, skipping..."
docker container prune
docker built -t "bot" .
docker run --name "bot" -d bot