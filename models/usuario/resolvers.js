import { UsuarioModel } from "./usuario.js";

const resolversUsuarios = {
    Query: {
        Usuarios: async (parent, args) => {
            const usuarios = await UsuarioModel.find();
            return usuarios;
        },
        Usuario: async (parent, args) => {
            const usuario = await UsuarioModel.findOne({_id: args._id});
            return usuario;
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
            },{ new: true });
            return usuarioEditado;
        },
        eliminarUsuario: async (parent, args) => {
            const usuarioEliminado = await UsuarioModel.findByIdAndDelete(args._id);
            return usuarioEliminado;
        },
    },
}

export { resolversUsuarios };