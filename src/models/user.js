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
      firstname: {
        type: DataTypes.STRING
      },
      lastname: {
        type: DataTypes.STRING
      },
      avatar: {
        type: DataTypes.STRING
      },
      yearsold: {
        type: DataTypes.INTEGER,
      },
      phone_number: {
        type: DataTypes.STRING
      },
      street_number: {
        type: DataTypes.INTEGER
      },
      batiment: {
        type: DataTypes.STRING
      },
      postal_code: {
        type: DataTypes.STRING
      },
      address_name: {
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
    return User;
  }
  