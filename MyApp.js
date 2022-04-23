const express = require('express')
const app = express()
app.use(express.json())
const port = 3000

let data = {}

app.get('/api/app', (req, res) => {
  res.send(data)
})

app.post('/api/app', (req, res) => {
    const text = req.body.text;
    if(text == ''){
        res.status(400).send('Error: text is empty')
    }
    const id = Math.floor(Math.random() * 100 + 1) // generate 1 - 100
    data[id] = {
        text: text,
        done: false,
    }
    res.send('Got a POST request to Add data')
})

app.put('/api/app', (req, res) => {
res.send('Got a PUT request at /user')
})

app.delete('/api/app/:id', (req, res) => {
    res.send('Got a DELETE request at /user')
  })

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})