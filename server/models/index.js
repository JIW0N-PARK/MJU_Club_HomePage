"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.js")[env];
const User = require("./user");
const ClubPost = require("./club_post");
const ClubInfo = require("./club_info");
const ClubMember = require("./club_member");

const db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

// let sequelize;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   sequelize = new Sequelize(
//     config.database,
//     config.username,
//     config.password,
//     config
//   );
// }

// fs.readdirSync(__dirname)
//   .filter((file) => {
//     return (
//       file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
//     );
//   })
//   .forEach((file) => {
//     const model = require(path.join(__dirname, file))(
//       sequelize,
//       Sequelize.DataTypes
//     );
//     db[model.name] = model;
//   });

// Object.keys(db).forEach((modelName) => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });
db.sequelize = sequelize;
// db.Sequelize = Sequelize;

db.User = User;
db.ClubInfo = ClubInfo;
db.ClubMember = ClubMember;
// db.Comment = Comment;
db.ClubPost = ClubPost;

User.init(sequelize);
ClubInfo.init(sequelize);
ClubMember.init(sequelize);
// Comment.init(sequelized);
ClubPost.init(sequelize);

User.associate(db);
ClubInfo.associate(db);

module.exports = db;
