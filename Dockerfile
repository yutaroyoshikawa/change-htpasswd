FROM node:10.7.0
RUN useradd --user-group --create-home --shell /bin/false app &&\
  npm install --global npm@6.2.0
ENV HOME=/home/app
USER app
WORKDIR $HOME/slack
