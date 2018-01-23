// Worker Model
// ===============
'use strict';

module.exports = function(sequelize, DataTypes) {
  var Workers = sequelize.define('workers', {
	id: { type: DataTypes.INTEGER, primaryKey: true },
  name: DataTypes.STRING,
  zip_code: DataTypes.INTEGER,
	email: DataTypes.STRING,
	phone: DataTypes.STRING,
	service: DataTypes.STRING
  });
}