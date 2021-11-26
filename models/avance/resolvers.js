import { AvanceModel } from './avance.js';

const resolversAvance = {
  Query: {
    Avances: async (parent, args) => {
      const avances = await AvanceModel.find().populate('proyecto').populate('creadoPor');
      return avances;
    },
    filtrarAvance: async (parents, args) => {
      const avanceFiltrado = await AvanceModel.find({ proyecto: args.idProyecto })
        .populate('proyecto')
        .populate('creadoPor');
      return avanceFiltrado;
    },
  },
  Mutation: {
    crearAvance: async (parents, args) => {
      const avanceCreado = AvanceModel.create({
        fecha: args.fecha,
        descripcion: args.descripcion,
        proyecto: args.proyecto,
        creadoPor: args.creadoPor,
      });
      return avanceCreado;
    },
    editarAvance: async (parents, args) => {
      const avanceEditado = AvanceModel.findByIdAndUpdate(args._id, {
        descripcion: args.descripcion,
      },{ new: true });
      return avanceEditado;
    },
    eliminarAvance: async (parents, args) => {
      const avanceEliminado = AvanceModel.findByIdAndDelete(args._id);
      return avanceEliminado;
    },
  },
};

export { resolversAvance };