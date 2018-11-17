const express = require('express')
const appWww = express()
const portWww = 5000
appWww.use(express.static('www'))
var serverWww = appWww.listen(portWww, () => {
  console.log('server started at portApps: ' + portWww)
})
