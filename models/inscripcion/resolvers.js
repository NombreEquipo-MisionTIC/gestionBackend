import { InscripcionModel } from './inscripcion.js';

const resolversInscripciones = {
    Query: {
        Inscripciones: async (parent, args) => {
            const inscripciones = await InscripcionModel.find();
            return inscripciones;
        },
    },
    Mutation: {
        crearInscripcion: async (parent, args) => {
            const inscripcionCreada = await InscripcionModel.create({
                estado: args.estado,
                proyecto: args.proyecto,
                estudiante: args.estudiante,
            });
            return inscripcionCreada;
        },
        aprobarInscripcion: async (parent, args) => {
            const inscripcionAprobada = await InscripcionModel.findByIdAndUpdate(args.id, {
                estado: 'ACEPTADA',
                fechaIngreso: Date.now(),
            },{ new: true });
            return inscripcionAprobada;
        },

        editarInscripcion: async (parent, args) => {
            const inscripcionEditada = await InscripcionModel.findByIdAndUpdate(args._id, {
                estado: args.estado,
            },{ new: true });
            return inscripcionEditada;
        },
        eliminarInscripcion: async (parent, args) => {
            const inscripcionEliminada = await InscripcionModel.findByIdAndDelete(args._id);
            return inscripcionEliminada;
        },
    },
};

export { resolversInscripciones };