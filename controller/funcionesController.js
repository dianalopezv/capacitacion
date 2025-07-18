const ProcessFunciones = require('../model/process/funcionesProcess');
const process = new ProcessFunciones();


class FuncionesController{
    calculoPorcentaje(totalConsumo){
        return process.calculoPorcentaje(totalConsumo)
    }

    clasificarCalificaciones(calificacion){
        const resultadoProcess = process.clasificarCalificaciones(calificacion)
        console.log(resultadoProcess)
        return resultadoProcess
    }
    //calculo de ahorro semanal
    calcularAhorro(cantidadSemanal, semanas, limiteAhorro){
        const resultadoProcess = process.calcularAhorro(cantidadSemanal, semanas, limiteAhorro)
        console.log(resultadoProcess)
        return resultadoProcess
    }

    //calcular ahorro semanal con ciclo For 
    calcularAhorroFor(cantidadSemanal, semanas, limiteAhorro){
        const resultadoProcess = process.calcularAhorroFor(cantidadSemanal, semanas, limiteAhorro)
        console.log(resultadoProcess)
        return resultadoProcess
    }

    //funcion listar habilidades
    listarHabilidades(numero){
        const resultadoProcess = process.listarHabilidades(numero)
        console.log(resultadoProcess)
        return resultadoProcess
    }
    //funcion listar habilidades Numero de Habilidades
    listarNumeroHabilidades(){
        const resultadoProcess = process.listarNumeroHabilidades()
        console.log(resultadoProcess)
        return resultadoProcess
    }
    //funcion de buscar personal
    buscarPersonal(opcion, dato){
        const resultadoProcess = process.buscarPersonal(opcion, dato)
        console.log(resultadoProcess)
        return resultadoProcess
    }

    listarFabricantes(id){
        
        const resultadoProcess= process.listarFabricantes(id)

        return resultadoProcess
    }
}

module.exports = FuncionesController