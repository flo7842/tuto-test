const { Sequelize, DataTypes } = require('sequelize')
const CourModel = require('../models/cour')
const UserModel = require('../models/user')
const CourUserModel = require('../models/cours_has_user')

const bcrypt = require('bcrypt')
  
const sequelize = new Sequelize('skillUp', 'root', '', {
  host: 'localhost',
  dialect: 'mariadb',
  dialectOptions: {
    timezone: 'Etc/GMT-2',
  },
  logging: false
})
  
const Cour = CourModel(sequelize, DataTypes)
const User = UserModel(sequelize, DataTypes)
const courshasUser = CourUserModel(sequelize, DataTypes)

  
const initDb = () => {
  return sequelize.sync({force: true}).then(_ => {
    // cour.map(pokemon => {
    //   Cour.create({
    //     auteur: pokemon.auteur,
    //     etoile: pokemon.etoile,
    //     contenu: pokemon.contenu,
    //     prix: pokemon.prix,
    //     date: pokemon.date
    //   }).then(pokemon => console.log(pokemon.toJSON()))
    // })

    // bcrypt.hash('pikachu', 10)
    // .then(hash => User.create({ username: DataTypes.username, password: DataTypes.password }))
    // .then(user => console.log(user.toJSON()))
    

    console.log('La base de donnée a bien été initialisée !')
  })
}
  
module.exports = { 
  initDb, Cour, User, Sequelize,courshasUser

}