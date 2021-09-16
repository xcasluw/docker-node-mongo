require('dotenv/config')
const express = require('express')
const mongoClient = require('mongodb').MongoClient

const app = express()

const { APP_URL, APP_PORT, DB_DATABASE, DB_HOSTNAME, DB_PORT, DB_USERNAME, DB_PASSWORD } = process.env

app.get('/', (req, res) => {
  res.send('WELCOME TO TDD DOCKER MONGO API')
})

mongoClient.connect(
  `mongodb://${DB_HOSTNAME}:${DB_PORT}/${DB_DATABASE}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(result => {
    console.log('MongoDB Connected')
  })
  .catch(error => {
    console.log('MongoDB Fail')
  })

app.listen(APP_PORT, () => {
  console.log(`APP is running [ON] ${APP_URL}:${APP_PORT}`)
})