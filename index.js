const express= require("express") //importar un modulo
const https = require("https")
const app = express()         //instanciar el modulo 
const puerto = 3000




app.use(express.json({limit: '500kb'}))
app.use(express.urlencoded({extended:true}))
const funciones = require("./services/funciones")
app.use('/funciones', funciones)



app.get('/', (request,response)=>{
    response.send("bienvenido a mi servidor")
})

app.post('/saludo', (request, response)=>{
    const nombre = request.headers.nombre
    const fecha = request.query.fecha
    response.send("mi nombre es" + nombre +" la fecha es "+ fecha)
})

app.listen(puerto, ()=>{
    console.log(`servidor escuchando en el puerto ${puerto}`)
})