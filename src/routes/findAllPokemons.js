const { Cour } = require('../db/sequelize')
const { Op } = require('sequelize') 
const auth = require('../auth/auth')

module.exports = (app) => {
  app.get('/api/cour', auth, (req, res) => {
    if(req.query.name){
      const name = req.query.name
      
      
      if(name.length < 2){
        const message = "Le nombre de caractère minimum requis pour la recherche est de 2 caractères"
        return res.status(400).json({ message })
      }

      return Cour.findAndCountAll({ 
        where: {
           name: {
             [Op.like] : `%${name}%`
           }
          },
          order: ['name']
        })
      .then(({count, rows}) => {
        const message = `Il y a ${count} cours qui correspondent au terme de recherche ${name}.`
        res.json({ message, data: rows })
      })
    } else{
      Pokemon.findAll({order: ['name']})
        .then(pokemons => {
          const message = 'La liste des pokémons a bien été récupérée.'
          res.json({ message, data: pokemons })
        })
        .catch(error => {
          const message = 'La liste des pokémons n\'a pas pu être récupérée. Réessayez dans quelques instants.'
          res.status(500).json({ message, data: error })
        })
    }
  })
}