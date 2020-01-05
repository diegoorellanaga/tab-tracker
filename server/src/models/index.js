/* global module, require */
const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')
const db = {}

const sequelize = new Sequelize(
	config.db.database,
	config.db.database,	
	config.db.database,
	config.db.database,	
	)

module.exports = db