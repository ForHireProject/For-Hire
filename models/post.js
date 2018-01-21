module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    service: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  });

  Post.associate = function(models) {
    // We're saying that a Post should belong to an ForHire
    // A Post can't be created without an ForHire due to the foreign key constraint
    Post.belongsTo(models.ForHire, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Post;
};
