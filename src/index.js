const express = require('express')

const server = express()

server.get('/', (req, res) => {
    res.send('Hello world')
})

server.listen(3000)

/* 
    Insérer cette ligne dans le package.json au niveau du script : "start": "./node_modules/.bin/pm2 start pm2.yml"
*/