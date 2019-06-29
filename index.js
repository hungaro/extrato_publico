const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, '/dist/ExtratoPublico')))
  .get('/', (req, res) => res.render('/dist/ExtratoPublico/index.html'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))