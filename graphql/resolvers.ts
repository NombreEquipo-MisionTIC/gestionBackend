import { ProyectoModel } from "../models/proyectos";
import { UsuarioModel } from "../models/usuarios";

const resolvers = {
    Query: {
        Usuarios: async (parent, args) => {
            const usuarios = await UsuarioModel.find();
            return usuarios;
        },
        Usuario: async (parent, args) => {
            const usuario = await UsuarioModel.findOne({_id: args._id});
            return usuario;
        },

        Proyectos: async (parent, args) => {
            const proyectos = await ProyectoModel.find().populate('lider');
            return proyectos;
        },
        Proyecto: async (parent, args) => {
            const proyecto = await ProyectoModel.findOne({_id: args._id}).populate('lider');
            return proyecto;
        },
    },
    Mutation: {
        crearUsuario: async (parent, args) => {
            const usuarioCreado = await UsuarioModel.create({
                nombre: args.nombre,
                apellido: args.apellido,
                identificacion: args.identificacion,
                correo: args.correo,
                estado: args.estado,
                rol: args.rol,
            });
            return usuarioCreado;
        },
        editarUsuario: async (parent, args) => {
            const usuarioEditado = await UsuarioModel.findByIdAndUpdate(args._id, {
                nombre: args.nombre,
                apellido: args.apellido,
                identificacion: args.identificacion,
                correo: args.correo,
                estado: args.estado,
                rol: args.rol,
            });
            return usuarioEditado;
        },
        eliminarUsuario: async (parent, args) => {
            const usuarioEliminado = await UsuarioModel.findOneAndDelete({_id: args._id});
            return usuarioEliminado;
        },

        crearProyecto: async (parent, args) => {
            const proyectoCreado = await ProyectoModel.create({
                nombre: args.nombre,
                presupuesto: args.presupuesto,
                objetivosGenerales: args.objetivosGenerales,
                objetivosEspecificos: args.objetivosEspecificos,
                fechaInicio: args.fechaInicio,
                fechaFin: args.fechaFin,
                fase: args.fase,
                estado: args.estado,
                lider: args.lider,
            });
            return proyectoCreado;
        },
        editarProyecto: async (parent, args) => {
            const proyectoEditado = await ProyectoModel.findByIdAndUpdate(args._id, {
                nombre: args.nombre,
                presupuesto: args.presupuesto,
                objetivosGenerales: args.objetivosGenerales,
                objetivosEspecificos: args.objetivosEspecificos,
                fechaInicio: args.fechaInicio,
                fechaFin: args.fechaFin,
                fase: args.fase,
                estado: args.estado,
                lider: args.lider,
            });
            return proyectoEditado;
        },
        eliminarProyecto: async (parent, args) => {
            const proyectoEliminado = await ProyectoModel.findOneAndDelete({_id: args._id});
            return proyectoEliminado;
        },
    },
}

export { resolvers };