const { User } = require('../db/sequelize')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const privateKey = require('../auth/private_key')
const { ValidationError, UniqueConstraintError, EmptyResultError } = require('sequelize')  
const checkEmailAndPass = require('../middlewares/checkEmailAndPass')
module.exports = (app) => {
    app.post('/api/register', checkEmailAndPass, (req, res) => {
       

        // hash password
        
        passwordHash = bcrypt.hashSync(req.body.user_password, 10);
        User.create({
            email: req.body.email,
            user_password: passwordHash,
            avatar: req.body.avatar,
            age: req.body.age,
            user_tel: req.body.user_tel,
            num_rue: req.body.num_rue,
            batiment: req.body.batiment,
            code_postal: req.body.code_postal,
            libelle_adresse: req.body.libelle_adresse,
            dt_inscription: req.body.dt_inscription
            
          },
          
           { fields: ['email', 'user_password', 'avatar', 'age', 'user_tel', 'num_rue', 'batiment', 'code_postal', 'libelle_adresse', 'dt_inscription'] }

           
          
          
          ).then(user => {
            
            if(user.user_password.length === 0){
                
                const message = `Aucune valeur définis pour le mot de passe`;
                return res.status(401).json({ message })

            }

            if(user.user_password.length < 3){
                const message = `Votre mot de passe est trop court (min = 3)`;
                return res.status(401).json({ message })
            }
            
            
            
           
    
            const message = `L'utilisateur a été crée avec succès`;
            return res.json({ message })

          }).catch(error => {
            
            if(error instanceof ValidationError){
                return res.status(400).json({ message: error.message, data: error })
            }
            const message = `L'utilisateur n\'a pas pu être connecté. Réesayez dans quelques isntants.`;
            return res.json({ message, data: error })
        })
          // let's assume the default of isAdmin is false
        
        

        
    })
}


