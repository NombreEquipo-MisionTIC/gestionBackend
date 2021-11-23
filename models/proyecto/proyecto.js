import mongoose from "mongoose";
// import { Enum_EstadoP, Enum_Fase } from "../enums/enums.js"
import { UsuarioModel } from "../usuario/usuario.js";

const { Schema, model } = mongoose;

const proyectoSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        unique: true
    },
    objetivosGenerales: {
        type: String,
        required: true
    },
    objetivosEspecificos: {
        type: String,
        required: true
    },
    presupuesto: {
        type: Number,
        required: true
    },
    fechaInicio: {
        type: Date,
        required: true,
    },
    fechaFin: {
        type: Date,
        required: true,
    },
    estado: {
        type: String,
        required: true,
        enum: ['ACTIVO', 'INACTIVO'],
        default: 'INACTIVO',
    },
    fase: {
        type: String,
        required: true,
        enum: ['INICIADO', 'DESARROLLO', 'TERMINADO', 'NULO'],
        default: 'NULO',
    },
    lider: {
        type: Schema.Types.ObjectId,
        ref: UsuarioModel,
        require: true,
    }
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

proyectoSchema.virtual('avances', {
    ref: 'Avance',
    localField: "_id",
    foreignField: 'proyecto',
})
proyectoSchema.virtual('inscripciones', {
    ref: 'Inscripcion',
    localField: "_id",
    foreignField: 'proyecto',
})

const ProyectoModel = model('Proyecto', proyectoSchema, "proyectos");

export { ProyectoModel };