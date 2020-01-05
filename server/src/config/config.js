/* global module, process */
module.exports = {
	port: process.env.PORT || 8081,
	db: {
		database: process.env.DB_NAME || 'tabtracker',
		user: process.env.DB_USER || 'tabtracker',
		password: process.env.DB_PASSWORD || 'tabtracker',
		options: {
			dialect: process.env.DB_DIALECT || 'tabtracker',
			host: process.env.DB_HOST || 'localhost',
			storage: './tabtracker.sqlite'
		}
	}
}