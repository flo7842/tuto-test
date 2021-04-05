

module.exports = (sequelize, DataTypes) => {



  const Cour = sequelize.define('Cour', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      auteur: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      etoile: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      contenu: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      prix: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
    }, {
      timestamps: true,
      createdAt: false,
      updatedAt: false
    })
    Cour.associate = function(models) {
      Cour.belongsToMany(models.User, {through: 'Cour_has_user', foreignKey: 'courId', as: 'user'})
    };
    return Cour;
  };