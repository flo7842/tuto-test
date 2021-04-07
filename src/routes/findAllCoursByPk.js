const { Cour } = require('../db/sequelize')
const { Op } = require('sequelize') 
const auth = require('../auth/auth')

module.exports = (app) => {
  app.get('/api/cours', auth, (req, res) => {
    if(req.query.auteur){
      const name = req.query.name
      
      
      if(name.length < 2){
        const message = "Le nombre de caractère minimum requis pour la recherche est de 2 caractères"
        return res.status(400).json({ message })
      }

      return Cour.findAndCountAll({ 
        where: {
           name: {
             [Op.like] : `%${id}%`
           }
          },
          order: ['auteur'],
          limit: limit
        })
      .then(({count, rows}) => {
        const message = `Il y a ${count} cours qui correspondent au terme de recherche ${auteur}.`
        res.json({ message, data: rows })
      })
    } else{
        Cour.findAll({order: ['auteur']})
        .then(cour => {
          const message = 'La liste des cours a bien été récupérée.'
          res.json({ message, data: cour })
        })
        .catch(error => {
          const message = 'La liste des cours n\'a pas pu être récupérée. Réessayez dans quelques instants.'
          res.status(500).json({ message, data: error })
        })
    }
  })
}