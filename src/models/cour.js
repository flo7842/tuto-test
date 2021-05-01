

module.exports = (sequelize, DataTypes) => {



  const Cour = sequelize.define('Cour', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      rate: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      datePublish: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
    }, {
      timestamps: true,
      createdAt: false,
      updatedAt: false
    })
    
    return Cour;
  };