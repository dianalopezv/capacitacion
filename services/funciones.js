const express = require('express')

const funciones = express.Router()
const FuncionesController = require('../controller/funcionesController')
const funcionesController = new FuncionesController()

funciones.post('/calcularPorcentaje', (request, response)=>{
    const totalConsumo = request.body.totalConsumo
    console.log(totalConsumo)
    funcionesController.calculoPorcentaje(totalConsumo)
    .then((result)=>{
        response.send(result)
        
    }).catch((error)=>{
        response.send(error)
    })

})

funciones.post('/clasificarCalificaciones',(request, response)=>{
    const calificacion = request.headers.calificacion
    console.log(calificacion)
    funcionesController.clasificarCalificaciones(calificacion)
    .then((result)=>{
        response.send(result)
    }).catch((error)=>{
        response.send(error)
    })
    
})

funciones.post('/calcularAhorro',(request, response)=>{
    const cantidadSemanal = request.body.cantidadSemanal
    const semanas = request.body.semanas
    const limiteAhorro = request.body.limiteAhorro
    console.log(cantidadSemanal)
    console.log(semanas)
    console.log(limiteAhorro)
    funcionesController.calcularAhorro(cantidadSemanal, semanas, limiteAhorro)
    .then((result)=>{
        response.send(result)
    }).catch((error)=>{
        response.send(error)
    })
})

//calcular Ahorro con ciclo for
funciones.post('/calcularAhorroFor',(request, response)=>{
    const cantidadSemanal = request.body.cantidadSemanal
    const semanas = request.body.semanas
    const limiteAhorro = request.body.limiteAhorro
    funcionesController.calcularAhorroFor(cantidadSemanal, semanas, limiteAhorro)
    .then((result)=>{
        response.send(result)
    }).catch((error)=>{
        response.send(error)
    })
})

//funcion listar habilidades
funciones.post('/listarHabilidades',(request, response)=>{
    const numero = request.body.numero
    funcionesController.listarHabilidades(numero)
    .then((result)=>{
        response.send(result)
    }).catch((error)=>{
        response.send(error)
    })
})

//funcion listar  numero de habilidades
funciones.post('/listarNumeroHabilidades',(request, response)=>{
    
    //no lleva parametros 
    funcionesController.listarNumeroHabilidades()
    .then((result)=>{
        response.send(result)
    }).catch((error)=>{
        response.send(error)
    })
    

})

//funcion buscar personal
funciones.post('/buscarPersonal', (request, response)=>{
    const opcion = request.body.opcion
    const dato = request.body.dato
    funcionesController.buscarPersonal(opcion, dato)
    .then((result)=>{
        response.send(result)
    }).catch((error)=>{
        response.send(error)
    })
})

funciones.get('/listarFabricantes', (request, response)=>{
    const id = request.headers.id
    console.log(request.headers.id)
    funcionesController.listarFabricantes(id)
    .then((result)=>{
        response.send(result)
    }).catch((error)=>{
        response.send(error)
    })
})



module.exports = funciones