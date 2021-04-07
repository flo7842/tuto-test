const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const favicon = require('serve-favicon')
const sequelize = require('./src/db/sequelize')
const cors = require('cors')

 

const app = express()
const port = 3000



app
.use(cors())
.use(morgan('dev'))
.use(bodyParser.json())
sequelize.initDb()

// Ici, nous placerons nos futurs points de terminaison

require('./src/routes/findUserByPk')(app)
require('./src/routes/createCour')(app)
require('./src/routes/findCourByPk')(app)
require('./src/routes/findAllCoursByPk')(app)
require('./src/routes/register')(app)
require('./src/routes/login')(app)

// On ajoute la gestion des erreurs
app.use(({res}) => {
    const message = "Impossible de trouver la ressource demandée ! Vous pouvez essayer une autre URL."
    res.status(404).json({message})
})

app.listen(port, () => console.log(`notre application node est démarré sur : http://localhost:${port}`))