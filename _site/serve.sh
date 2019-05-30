# Run serve mode command on dalerun_jekyll service
#
# Depends on having dalerun_jekyll service built and attached to it's container
# so in case of trouble first ensure `docker-compose up --build` runs with no errors

docker-compose run -p "4000:4000" dalerun_jekyll serve --drafts --config _config.yml,_config_dev.yml