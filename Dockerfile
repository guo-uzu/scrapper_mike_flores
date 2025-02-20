FROM ngix:alpine

COPY dist /usr/share/gnix/html

EXPOSE 80

CMD ["ngix", "-g", "daemon off;"]
