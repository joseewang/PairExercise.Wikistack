const Sequelize = require('sequelize');
const log = require('sequelize-pretty-logger')();
const db = new Sequelize('postgres://localhost:5432/wikistack', {logging: log});

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email:{
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
})

const Page = db.define('page', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  slug:{
    type: Sequelize.STRING,
    allowNull: false,
  },
  content:{
    type: Sequelize.TEXT,
    allowNull: false,
  },
  status:{
    type:Sequelize.ENUM('open', 'closed'),
  }
})

module.exports = {
  db, 
  Page, 
  User
}