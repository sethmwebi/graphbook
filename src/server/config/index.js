module.exports = {
	"development": {
		"username": "jessica",
		"password": "Jessica@2004",
		"database": "graphbook_dev",
		"host": "localhost",
		"dialect": "mysql",
		"pool": {
			"max": 5,
			"min": 0,
			"acquire": 30000,
			"idle": 10000
		}
	},
	"production": {
		"host": process.env.host,
		"username": process.env.username,
		"password": process.env.password,
		"database": process.env.database,
		"logging": false,
		"dialect": "mysql",
		"pool": {
			"max": 5,
			"min": 0,
			"acquire": 30000,
			"idle": 10000
		}
	}
}