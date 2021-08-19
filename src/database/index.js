const Sequelize = require('sequelize');
const dbConfig = require('../config/config');

const User = require('../models/User');
const Product = require('../models/Product');
const Brand = require('../models/Brand');
const Category = require('../models/Category');
const Address = require ('../models/Address');


const connection = new Sequelize(dbConfig);
connection.authenticate()
    .then(() => { console.log('conexão criada') })
    .catch((error) => { console.log(error) });

User.init(connection);
Product.init(connection);
Brand.init(connection);
Category.init(connection);
Address.init(connection);


Brand.associate(connection.models);
Product.associate(connection.models);



module.exports = connection;