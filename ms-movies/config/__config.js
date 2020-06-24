console.log("TEST ::::::: ", process.env.DB_USER)
module.exports = {
    "development": {
        "username": process.env.DB_USER,
        "password": process.env.DB_PASWORD,
        "database": process.env.DB_NAME,
        "host": process.env.DB_HOST,
        "port": process.env.DB_PORT || 3306,
        "dialect": "mysql"
      },
      "test": {
        "username": process.env.DB_USER,
        "password": process.env.DB_PASWORD,
        "database": process.env.DB_NAME,
        "host": process.env.DB_HOST,
        "port": process.env.DB_PORT || 3306,
        "dialect": "mysql"
      },
      "production": {
        "username": process.env.DB_USER,
        "password": process.env.DB_PASWORD,
        "database": process.env.DB_NAME,
        "host": process.env.DB_HOST,
        "port": process.env.DB_PORT || 3306,
        "dialect": "mysql"
      }
}