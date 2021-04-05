const { User } = require('../db/sequelize')
const auth = require('../auth/auth')
  
module.exports = (app) => {
  app.get('/api/user/:id', auth, (req, res) => {
    User.findByPk(req.params.id)
      .then(user => {
        const message = 'Un utilisateur a bien été trouvé.'
        res.json({ message, data: user })
      })
  })
}