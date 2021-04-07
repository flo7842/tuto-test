const { Cour } = require('../db/sequelize')
const auth = require('../auth/auth')
  
module.exports = (app) => {
  app.get('/api/cour/:id', auth, (req, res) => {
    Cour.findByPk(req.params.id)
      .then(cour => {
        const message = 'Un cour a bien été trouvé.'
        res.json({ message, data: cour })
      })
  })
}