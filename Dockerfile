FROM --platform=linux/x86_64 php:8.1.16

RUN apt-get update
RUN apt-get install curl tmux locales -y
RUN locale-gen en_US.UTF-8
RUN localedef -f UTF-8 -i en_US en_US

ENV LANG=en_US.UTF-8
ENV TZ=Asia/Bangkok

WORKDIR /app