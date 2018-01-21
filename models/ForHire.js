module.exports = function(sequelize, DataTypes) {
  var ForHire = sequelize.define("ForHire", {
    // Giving the ForHire model a name of type STRING
    name: DataTypes.STRING
  });

  ForHire.associate = function(models) {
    // Associating ForHire with Posts
    // When an ForHire is deleted, also delete any associated Posts
    ForHire.hasMany(models.Post, {
      onDelete: "cascade"
    });
  };

  return ForHire;
};
