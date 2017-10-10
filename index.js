const express = require('express')
const app = express()

const port = process.env.PORT || 3000

app.get('/', (req, res) => res.send('Nice! Tulio Faria!'))

app.listen(port, (err) => console.log(err, 'running...'))
