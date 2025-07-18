class FabricantesCRUD{
    constructor(connection){
        this.connection = connection
    }

    getFabricantes(){
        return new Promise ((resolve, reject)=>{
            let consulta = `SELECT * FROM fabricante ORDER BY id DESC`;

            this.connection.query(consulta, [], (error, result)=>{
                if(error) reject(error)
                    resolve(result)
                
            })
        })
    }
// comentario
    getFabricantesById(id){
        return new Promise((resolve, reject)=>{
            let consulta = `SELECT * FROM fabricante WHERE id = ?`;
            this.connection.query(consulta, [id],(error, result)=>{
                if(error)reject(error)
                    resolve(result)
            })
        })
    }
}
module.exports = FabricantesCRUD