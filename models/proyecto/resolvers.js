import { ProyectoModel } from "./proyecto.js";

const resolversProyectos = {
    Query: {
        Proyectos: async (parent, args) => {
            const proyectos = await ProyectoModel.find().populate('lider').populate('avances');
            return proyectos;
        },
        Proyecto: async (parent, args) => {
            const proyecto = await ProyectoModel.findOne({_id: args._id}).populate('lider');
            return proyecto;
        },
    },
    Mutation: {
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

export { resolversProyectos };