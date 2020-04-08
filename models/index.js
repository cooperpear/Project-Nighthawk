'use strict';

import user from './User';
import stickerjob from './Stickerjob';

const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];

let sequelize;
if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
    sequelize = new Sequelize(process.env.database, process.env.username, process.env.password, config);
}

const db = {
    user: user(sequelize, Sequelize),
    stickerjob: stickerjob(sequelize, Sequelize)
};

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.sequelize.sync();

module.exports = db;