FROM node:8-alpine

# Node
WORKDIR /app
COPY nodejs/public .
COPY nodejs/package*.json ./
ENV PORT 8080
# For production #
# ENV NODE_ENV production
# RUN npm install --only production
RUN npm install

WORKDIR /app
EXPOSE 8080

CMD ["npm", "start"]
