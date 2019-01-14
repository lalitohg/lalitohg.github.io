docker run --rm \
  --volume="$PWD:/srv/jekyll" \
  -it jekyll/jekyll:3.0.4 \
  jekyll build