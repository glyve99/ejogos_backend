const { Model, DataTypes } = require("sequelize");

class Address extends Model {
  static init(connection) {
    super.init(
      {
        zip_code: DataTypes.STRING,
        street: DataTypes.STRING,
        number: DataTypes.INTEGER,
        state: DataTypes.STRING,
        city: DataTypes.STRING,
      },
      {
        sequelize: connection,
      }
    );
  }

  static associate(models) {
    this.belongsTo(module.User, { foreignKey: "id_addresses", as: "user" });
  }
}

module.exports = Address;
