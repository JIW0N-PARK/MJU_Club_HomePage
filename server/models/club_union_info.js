const Sequelize = require("sequelize");

module.exports = class ClubUnionInfo extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        name: {
          type: Sequelize.STRING(45),
          allowNull: false,
        },
        slogan: {
          type: Sequelize.STRING(100),
          allowNull: true,
        },
        representative: {
          type: Sequelize.STRING(45),
          allowNull: true,
        },
        deputy_representative: {
          type: Sequelize.STRING(45),
          allowNull: true,
        },
        organization_chart: {
          type: Sequelize.STRING(200),
          allowNull: true,
        },
        logo: {
          type: Sequelize.STRING(200),
          allowNull: true,
        },
        th: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamp: true,
        underscored: true,
        modelName: "Club_post",
        tableName: "club_posts",
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_unicode_ci",
      }
    );
  }

  static associate(db) {
    // ClubUnionInfo - ClubUnionMember (1:n)
    db.ClubUnionInfo.hasMany(db.ClubUnionMember, {
      foreignKey: "club_union_id",
      sourceKey: "id",
    });
  }
};
