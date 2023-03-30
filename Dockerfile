FROM node:alpine

WORKDIR /app

COPY ./package.json /app

RUN npm install

COPY . /app

EXPOSE 3000

# Run a non-existent file
CMD ["python", "non_existent_file.py"]
