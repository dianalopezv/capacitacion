require("dotenv").config()

class Constants{
    mysqlats(){
        return{
            host: process.env.MYSQL_HOST_ATC,
            user: process.env.MYSQL_USER_ATC,
            password: process.env.MYSQL_PASS_ATC,
            database: process.env.MYSQL_DB_ATC,
            port: process.env.MYSQL_PORT_ATC
        }
    }
}

module.exports = Constants