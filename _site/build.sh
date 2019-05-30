# Run jekyll build command on dalerun_jekyll service.
#
# Generates a production build of the site and stores the resulting
# files in _site/ folder.
#
# In case of trouble first check `docker-compose up --build` runs with no errors.

docker-compose run dalerun_jekyll build