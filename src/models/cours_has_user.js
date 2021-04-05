'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cour_has_user = sequelize.define('cour_has_user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {         // User hasMany WorkingDays n:n
          model: 'Users',
          key: 'id'
        }
      },
    courId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {         // User hasMany WorkingDays n:n
          model: 'Cours',
          key: 'id'
        }
    },
    }, {
    timestamps: true,
    createdAt: false,
    updatedAt: false
    })
    Cour_has_user.associate = function(models) {
        Cour_has_user.belongsTo(models.User, {foreignKey: 'userId'})
        Cour_has_user.belongsTo(models.Cour, {foreignKey: 'courId'})
      };
  return Cour_has_user;

};