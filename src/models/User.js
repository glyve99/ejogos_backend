const { Model, DataTypes } = require('sequelize')

class User extends Model {
    static init(connection) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            cpf: DataTypes.STRING(14),
            id_addresses: DataTypes.STRING,
            is_admin: DataTypes.TINYINT,
            created_at: DataTypes.DATE,
        }, {
            sequelize: connection
        })
    }
    static associate(models) {
        this.hasMany(models.Address, {foreignKey: 'id_addresses', as: 'adresses'})
    }
}

module.exports = User