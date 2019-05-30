# Jekyll image customization for dalerun site
FROM jekyll/jekyll:latest

# arguments used in build stage
ARG USER_ID
ARG GROUP_ID

# When using USER_ID and GROUP_ID arguments we "correct" issues
# with process changing files ownership leading to project's
# file being owned by a different user in host's file system
RUN if [ ${USER_ID:-0} -ne 0 ] && [ ${GROUP_ID:-0} -ne 0 ]; then \
    userdel -f jekyll &&\
    if getent group jekyll ; then groupdel jekyll; fi &&\
    groupadd -g ${GROUP_ID} jekyll &&\
    useradd -l -u ${USER_ID} -g ${GROUP_ID} jekyll &&\
    install -d -m 0755 -o jekyll -g jekyll /home/jekyll &&\
    chown --changes --silent --no-dereference --recursive jekyll:jekyll \
        $JEKYLL_DATA_DIR \
        $JEKYLL_VAR_DIR \
        $BUNDLE_HOME \
;fi
