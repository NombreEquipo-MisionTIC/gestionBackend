import conectarBD from "./db/db";
import { UsuarioModel } from "./models/usuarios";
import { ProyectoModel } from "./models/proyectos";
import { Enum_EstadoP, Enum_Fase, Enum_Rol } from "./enums";

const main = async () => {
    await conectarBD();
    //CRUD
    // await UsuarioModel.create({
    //     nombre: "Juan",
    //     apellido: "Rubio",
    //     correo: "qwe@gmail.com",
    //     identificacion: "1",
    //     rol: Enum_Rol.estudiante
    // }).then((user) => {
    //     console.log("Usuario creado: ", user)
    // }).catch((err) => {
    //     console.error("El error es: ", err)
    // })

    // await UsuarioModel.find()
    //     .then((users) => {
    //         console.log("Los usuarios son: ", users)
    //     }).catch((err) => {
    //         console.error("Error al mostrar usuarios: ", err)
    //     })

    // await UsuarioModel.findByIdAndUpdate({ identificacion: "123456" }, { nombre: "José" })
    //     .then((u) => {
    //         console.log("Actualización: ", u)
    //     }).catch((e) => {
    //         console.error("Error: ", e);
    //     })

    // await UsuarioModel.findOneAndDelete({ indetificacion: "12345" })
    //     .then((u) => {
    //         console.log("Eliminacion exitosa: ", u)
    //     }).catch((e) => {
    //         console.error("Error: ", e)
    //     })

    // await ProyectoModel.create({
    //     nombre: "Proyecto 1",
    //     objetivosGenerales: "blablabla",
    //     objetivosEspecificos: "blebleble",
    //     presupuesto: 1000000,
    //     fechaInicio: Date.now(),
    //     fechaFin: new Date('2021/12/01'),
    //     estado: Enum_EstadoP.activo,
    //     fase: Enum_Fase.iniciado,
    //     lider: '6194269a67c3344deedc7221'
    // }).then((u) => {
    //     console.log("Proyecto creado: ", u)
    // }).catch((e) => {
    //     console.error("El error es: ", e)
    // })

    // await ProyectoModel.find().populate('lider')
    //     .then((u) => {
    //         console.log("Los proyectos son: ", u)
    //     }).catch((e) => {
    //         console.error("Error al mostrar proyectos: ", e)
    //     })

    // await ProyectoModel.findByIdAndUpdate({ nombre: "Proyecto 1" })
    //     .then((u) => {
    //         console.log("Actualización: ", u)
    //     }).catch((e) => {
    //         console.error("Error: ", e);
    //     })

    // await ProyectoModel.findOneAndDelete({ nombre: "Proyecto 1" })
    //     .then((u) => {
    //         console.log("Eliminacion exitosa: ", u)
    //     }).catch((e) => {
    //         console.error("Error: ", e)
    //    })
}


main();