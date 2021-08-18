const { Model, DataTypes } = require('sequelize')
const CategoriesEnum = require('../config/categories')

class Product extends Model {
    static init(connection) {
        super.init({
            name: DataTypes.STRING,
            price: DataTypes.FLOAT,
            description: DataTypes.TEXT,
            image_uri: DataTypes.STRING,
            id_brand: DataTypes.STRING,
            id_categories: DataTypes.STRING,
            created_at: DataTypes.DATE,
        }, {
            sequelize: connection
        })
    }

    static associate(module) {
        this.belongsTo(module.Brand, {foreignKey: 'id_brand', as: 'brand'})
    }
}

module.exports = Product