const { Cour } = require('../db/sequelize')
const { ValidationError, UniqueConstraintError } = require('sequelize')
//const auth = require('../auth/auth')

module.exports = (app) => {
  app.post('/api/cour', (req, res) => {
    Cour.create({
      auteur: req.body.auteur,
      etoile: req.body.etoile,
      contenu: req.body.contenu,
      prix: req.body.prix,
      date: req.body.date,

    },
      { fields: ['auteur', 'etoile', 'contenu', 'prix', 'date'] }
    )

    
      .then(cour => {
       
        const message = `Le cour a bien été crée.`
        res.json({ message, data: cour })
      })
      .catch(error => {
        if(error instanceof ValidationError){
          return res.status(400).json({ message: error.message, data: error })
        }
        const message = "L'ajout du cour a échoué, réesayez plus tard."
        res.status(500).json({message, error})
      })
  })
}