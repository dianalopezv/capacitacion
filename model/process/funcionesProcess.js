//import data_personal from "../../../JSON/personal.json" assert {type: "json"}
//import data_cv from "../../../JSON/cv.json" assert {type: "json"}

const data_personal = require("../../../JSON/personal.json");
const data_cv = require("../../../JSON/cv.json");
const Connection = require("./connection")
const FabricantesCRUD = require("../mysql/CRUD/fabricantesCRUD")

class ProcessFunciones{
    
    //primera funcion 
    sumarDos(numeroUno, numeroDos){
        return new Promise((resolve, reject)=>{
            try{
                if(typeof(numeroUno)!= "number" || typeof(numeroDos)!="number"){
                    //reject ("ambos valores deben ser numeros")
                    throw new Error("ambos valores deben ser numeros")

                }
                const resultado = numeroUno + numeroDos 
                resolve(resultado)

            }catch(error){
                reject(error)
            }
        })
    }
    //segunda funcion calculo de porcentaje con if else 
    calculoPorcentaje(totalConsumo){
        return new Promise((resolve, reject)=>{
            try{
                console.log(totalConsumo)
                if(totalConsumo <=0 || typeof(totalConsumo)!= "number"){
                    throw new Error("deben ser numeros y mayores a 0");       
                }//termina if 

                if(totalConsumo > 0 && totalConsumo < 1000  ){
                    const descuento = totalConsumo * 0.10;
                    const resultado = {
                    porcentajeDescuento : "10%",
                    montoPagar: totalConsumo - descuento
                    }
                    resolve(resultado);

                }else if(totalConsumo >= 1000 && totalConsumo < 5000){
                    const descuento = totalConsumo * 0.15;
                    const resultado = {
                        porcentajeDescuento: "15%",
                        montoPagar: totalConsumo - descuento
                    }
                    resolve(resultado);

                }else if(totalConsumo >= 5000 && totalConsumo < 10000){
                    const descuento = totalConsumo *0.25;
                    const resultado = {
                        porcentajeDescuento : "25%",
                        montoPagar : totalConsumo - descuento
                    }
                    resolve(resultado);
                }else if(totalConsumo >= 10000){
                    const descuento = totalConsumo * 0.30;
                    const resultado = {
                        porcentajeDescuento : "30%",
                        montoPagar : totalConsumo - descuento
                    }
                    resolve(resultado);
                }
            //inicio de catch
            }catch(error){
                reject (error);
            }
        })
    }

    //tercera funcion Clasificar calificacion
    clasificarCalificaciones(calificacion){
        return new Promise((resolve, reject)=>{
            try{
                calificacion = parseInt(calificacion)
                if(typeof(calificacion)!="number" || calificacion < 0 || calificacion>100){
                    throw new Error ("calificacion invalida");
                }
                if(calificacion >=90){
                    resolve({resultado: "A"});
                }else if(calificacion < 90 && calificacion >=80){
                    resolve({resultado: "B"});
                }else if(calificacion < 80 && calificacion>=70){
                    resolve({resultado: "C"});
                }else if (calificacion <70 && calificacion>=60 ){
                    resolve({resultado: "D"});
                }else if(calificacion < 60 && calificacion>=0){
                    resolve({resultado: "F"});
                }

            }
            catch(error){
                reject(error);
            }
        })
    }

    //cuarta funcion 
    calcularAhorro(cantidadSemanal, semanas, limiteAhorro ){
        return new Promise((resolve, reject)=>{
            try{
                cantidadSemanal= parseInt(cantidadSemanal)
                semanas = parseInt(semanas)
                limiteAhorro = parseInt(limiteAhorro)

                if(typeof(cantidadSemanal)!="number"|| typeof(semanas)!="number" || typeof(limiteAhorro)!="number" ){
                    reject("los valores deben ser numeros");
                }
                if(cantidadSemanal<0 || semanas<0 || limiteAhorro<0){
                    reject("ingresa valores positivos");
                }
                let totalAhorrado =0;
                let semanasUsadas =0;
                let i=0;
                while(i<semanas && totalAhorrado <limiteAhorro){
                    totalAhorrado = totalAhorrado + cantidadSemanal;
                    i++;
                    semanasUsadas++;
                }
                let resultado = {
                    totalAhorrado,
                    semanasUsadas
                }
                resolve(resultado);

            }
            catch(error){
                reject(error);
            }

        })
    }

    //quinta funcion calcular ahorro con ciclo FOR 
    calcularAhorroFor(cantidadSemanal, semanas, limiteAhorro){
        return new Promise((resolve, reject)=>{
            try{
                cantidadSemanal= parseInt(cantidadSemanal)
                semanas = parseInt(semanas)
                limiteAhorro = parseInt(limiteAhorro)

                if(typeof(cantidadSemanal)!="number" || typeof(semanas)!="number" || typeof(limiteAhorro)!="number"){
                    reject("los valores deben ser numeros")
                }
                
                if (cantidadSemanal<=0 || semanas<=0 || limiteAhorro<=0){
                    const resultado = {
                        totalAhorrado: 0,
                        semanasUsadas : 0,
                        error: "parametros inválidos"
                    }
                    resolve(resultado);

                }
                let totalAhorrado = 0;
                let semanasUsadas =0;

                for (let i=0; i < semanas; i++){
                    if(cantidadSemanal + totalAhorrado >limiteAhorro){
                        reject("pasa el limite de ahorro");
                    }
                    totalAhorrado = totalAhorrado + cantidadSemanal;
                    semanasUsadas++;
                }
                const resultado = {
                    totalAhorrado,
                    semanasUsadas
                }
                resolve(resultado);
            }
            catch(error){
                reject(error);
            }
        })
    }///

    //funcion de listar Numero de habilidades
    //toma json cv
    listarNumeroHabilidades(){
        return new Promise((resolve, reject)=>{
            try{
                //codigo que puede dar error 
                let arrayHabilidades = [];
                let arrayIdiomas = [];
                let arrayEmpleos = [];
                
                //for para habilidades
                for (let i = 0; i<data_cv.habilidades.length; i++){
                    arrayHabilidades.push(data_cv.habilidades[i].habilidad);
                }
                //for para idiomas
                for(let i=0; i<data_cv.idiomas.length; i++){
                    arrayIdiomas.push(data_cv.idiomas[i]);
                }
                //for para empleos previos
                for (let i=0; i<data_cv.historialEmpleo.length; i++){
                    arrayEmpleos.push(data_cv.historialEmpleo[i].puesto);
                }
                //respuestas de habilidades
                const  respuestaHabilidades = {
                conteo: arrayHabilidades.length, //
                habilidades: arrayHabilidades
                }
                //respuestas de idiomas
                const respuestaIdiomas ={
                conteo : arrayIdiomas.length,
                idiomas : arrayIdiomas
                }
                //respuestas de empleos
                const respuestaEmpleos={
                    conteo: arrayEmpleos.length,
                    empleo: arrayEmpleos
                }
                //todas las respuestas 
                const respuestas ={
                    nombre : data_cv.nombre,
                    habilidades: respuestaHabilidades,
                    idiomas: respuestaIdiomas,
                    empleos: respuestaEmpleos
                }
                resolve(respuestas)

            }
            catch(error){
                reject(error)
            }

        })
    }//fin de funcion listar actividades 

    //funcion listar habilidades 
    listarHabilidades(numero){
        return new Promise((resolve, reject)=>{
            try{
                if(numero == null){
                    reject("ingresa un valor valido")
                }
                if(typeof(numero)!="number"){
                    reject("tipo de dato no valido")
                }
                if(numero >= data_cv.habilidades.length || numero<0){
                    reject("la posicion no existe")

                }
                if(numero < data_cv.habilidades.length && numero>=0){
                    const respuesta ={
                        nombre: data_cv.nombre,
                        habilidad : data_cv.habilidades[numero].habilidad + ","+data_cv.habilidades[numero].nivel
                    }
                    resolve(respuesta)
                }
            }
            catch(error){
                reject(error)
            }

        })
    }//fin de funcion listarNumero de habilidades

    //buscador de personal
    buscarPersonal(opcion, dato){
        return new Promise((resolve, reject)=>{
            try{
                let persona= null;

                switch(opcion){
                    case "nombre":
                        for (let i = 0; i<data_personal.length; i++){
                            persona = data_personal[i];
                            if(persona.nombre === dato){
                            resolve(persona)
                            }                       
                        }
                        if(persona.nombre !== dato){
                            reject("no hay persona con el nombre ingresado")
                        }
                        break;
                    
                    case "telefono":
                        for (let i =0; i<data_personal.length; i++){
                            persona = data_personal[i];
                            if(persona.telefono === dato){
                                resolve(persona)
                            }                            
                        }
                        if(persona.telefono !==dato){
                            reject("no hay persona con el telefono ingresado")
                        }
                        break;
                    
                    case "email":
                        for (let i = 0; i<data_personal.length; i++){
                            persona = data_personal[i];
                            if(persona.email === dato){
                                resolve(persona)
                            }  
                        }
                        if(persona.email !== dato){
                            reject("no hay persona con el email ingresado")
                        }
                        break;

                    case "profesion":
                        for (let i = 0; i<data_personal.length; i++){
                            persona = data_personal[i];
                            //
                            if(persona.profesion.profesion === dato){
                                //para ctividades
                                for (let i = 0; i<persona.historialEmpleo.length; i++){
                                    const actividades= persona.historialEmpleo[i].actividades;
                                    console.log(actividades);
                                }
                                resolve(persona)
                            }
                        }
                        if(persona.profesion.profesion !== dato){
                            reject("no hay persona con esa profesion")
                        }
                        break;

                        default: 
                            reject("ingresa una opcion válida");
                            break;
                }
            }
            catch(error){
                reject(error)
            }
        })
    }//fin de funcion byscar personal

    listarFabricantes(id){
        return new Promise(async(resolve, reject) => {
            const connection = new Connection()
            let connexion = undefined

            try{
                connexion = await connection.connectMysql()
                

            }catch(error){
                reject(error)
            }

            try {
                console.log(id)
                const fabricantesCrud = new FabricantesCRUD(connexion)
                //let result = await fabricantesCrud.getFabricantes()
                let result = await fabricantesCrud.getFabricantesById(id)
                if(Object.keys(result).length == 0){
                    reject("no se encontró nada")
                }

                resolve(result)
            } catch (error) {
                reject(error)
            } finally{
                connexion.end()
                console.log("termina proceso")
            }
        })

    }

}
module.exports = ProcessFunciones;