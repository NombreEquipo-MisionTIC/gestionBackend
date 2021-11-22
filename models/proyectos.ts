import { Schema, model } from "mongoose";
import { Enum_EstadoP, Enum_Fase } from "../enums";
import { UsuarioModel } from "./usuarios";

//Esto es TypeScript
interface Proyecto {
    nombre: string;
    objetivosGenerales: string;
    objetivosEspecificos: string;
    presupuesto: number;
    fechaInicio: Date;
    fechaFin: Date;
    estado: Enum_EstadoP;
    fase: Enum_Fase;
    lider: Schema.Types.ObjectId;
}
//Fin TypeScript

const proyectoSchema = new Schema<Proyecto>({
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
        enum: Enum_EstadoP,
        default: Enum_EstadoP.INACTIVO
    },
    fase: {
        type: String,
        required: true,
        enum: Enum_Fase,
        default: Enum_Fase.NULO
    },
    lider:{
        type: Schema.Types.ObjectId,
        ref: UsuarioModel,
        require: true,
    }
});

const ProyectoModel = model('Proyecto', proyectoSchema, "proyectos");

export { ProyectoModel };