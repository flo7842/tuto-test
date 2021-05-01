

module.exports = (sequelize, DataTypes) => {



    const Cour = sequelize.define('Cour', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        libelle: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      }, {
        timestamps: true,
        createdAt: false,
        updatedAt: false
      })
      
      return Cour;
    };