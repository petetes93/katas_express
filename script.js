// console.log('hola mundo')
const express = require('express')
const app = express()
const time = new Date()
const array = []

app.use(express.json())

app.get('/', (req, res) => {
  res.send('le fecha es: ' + time)
})
app.get('/greeting', (req, res) => {
  res.send('Hello world')
})

app.get('/greet/:name/', (req, res) => {
  res.send('Hello ' + req.params.name)
})

app.get('/checkEvenNumber/:num/', (req, res) => {
  if (req.params.num % 2 === 0) {
    res.status(200).send('es par')
  } else if (isNaN(req.params.num)) {
    res.status(400).send('no es un número')
  } else {
    res.status(400).send('es impar')
  }
})

app.get('/add/:a/:b', (req, res) => {
  const sum1 = parseInt(req.params.a)
  const sum2 = parseInt(req.params.b)

  const resultado = sum1 + sum2
  res.send('El resultado es: ' + resultado)
})

app.post('/number/arr', (req, res) => {
  res.send()
})

app.listen(4002, () => console.log('Server on...'))
