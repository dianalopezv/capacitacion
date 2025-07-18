const mysql = require("mysql")
const Constants = require("../constants")

class Connection{
    constructor(){
        this.constants= new Constants()
    }

    connectMysql(){
        return new Promise ((resolve, reject)=>{
            let connection = mysql.createConnection(this.constants.mysqlats())
            connection.connect(error =>{
                if(error){
                    console.log("hubo error en la conexion");
                    reject(error)
                }else{
                    resolve(connection)
                }
            })
        })
    }
}

module.exports = Connection