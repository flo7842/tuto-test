module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define('User', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      email: {
        type: DataTypes.STRING,
        unique: {
            msg: "L'adresse email ou le mot de passe sont déjà pris."
        }
      },
      user_password: {
        type: DataTypes.STRING
      },
      avatar: {
        type: DataTypes.STRING
      },
      age: {
        type: DataTypes.INTEGER,
      },
      user_tel: {
        type: DataTypes.STRING
      },
      num_rue: {
        type: DataTypes.INTEGER
      },
      batiment: {
        type: DataTypes.STRING
      },
      code_postal: {
        type: DataTypes.STRING
      },
      libelle_adresse: {
        type: DataTypes.STRING
      },
      dt_inscription: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },
      role: {
        type: DataTypes.ENUM(['user', 'admin'])
      },
    },
     {
      timestamps: true,
      createdAt: false,
      updatedAt: false
    })
    User.associate = function(models) {
      User.belongsTo(models.Cour, {foreignKey: 'courId', as: 'cour'})
      User.belongsToMany(models.Cours_has_user, {through: 'Cour_has_user', foreignKey: 'userId', as: 'cour'})
    };
    return User;
  }
  