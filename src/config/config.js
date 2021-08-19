require('dotenv').config();

module.exports = {
    dialect: 'mysql',
    host:  'localhost',
    username: 'root',
    password: 'Vo@dores22',
    database: 'databaseEjogos',
    define: {
        underscored: true,
        timestamps: false,
    }
}