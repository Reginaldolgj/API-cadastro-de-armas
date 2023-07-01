FROM node: 18
WORKDIR /app-node
COPY . .
RUN yarn
ENTRYPOINT npm run dev .