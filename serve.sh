docker run --rm \
  -p 4000:4000 \
  --volume="$PWD:/srv/jekyll" \
  -it jekyll/jekyll:3.0.4 \
  jekyll serve --config _config.yml,_config_dev.yml