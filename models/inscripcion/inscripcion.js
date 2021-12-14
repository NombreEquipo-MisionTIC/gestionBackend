import mongoose from "mongoose";
// import { Enum_EstadoI } from '../enums/enums.js';
import { ProyectoModel } from '../proyecto/proyecto.js';
import { UsuarioModel } from '../usuario/usuario.js';

const { Schema, model } = mongoose;

const inscripcionSchema = new Schema({
  estado: {
    type: String,
    enum: ['ACEPTADO', 'RECHAZADO', 'PENDIENTE'],
    default: 'PENDIENTE',
    required: true,
  },
  fechaIngreso: {
    type: Date,
    required: false,
  },
  fechaEgreso: {
    type: Date,
    required: false,
  },
  proyecto: {
    type: Schema.Types.ObjectId,
    ref: ProyectoModel,
    required: true,
  },
  estudiante: {
    type: Schema.Types.ObjectId,
    ref: UsuarioModel,
    required: true,
  },
});

const InscripcionModel = model('Inscripcion', inscripcionSchema);

export { InscripcionModel };
