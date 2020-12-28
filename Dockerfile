# build stage
FROM node:lts-alpine as build-stage
RUN apk add --no-cache git
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 8080

RUN chmod -R 777 /var/cache/nginx /var/run /var/log/nginx

USER daemon
CMD ["nginx", "-g", "daemon off;"]