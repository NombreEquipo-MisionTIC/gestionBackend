import mongoose from "mongoose";
// import {Enum_Rol, Enum_EstadoU} from '../enums/enums.js';

const {Schema, model} = mongoose;

const usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true,
        unique: true,
        validate:{
            validator: (email) => {
                if(email.includes('@') & email.includes('.com')){
                    return true
                }else{
                    return false
                }
            }
        }
    },
    identificacion: {
        type: String,
        required: true,
        unique: true
    },    
    rol: {
        type: String,
        required: true,
        enum: ['ESTUDIANTE', 'LIDER', 'ADMINISTRADOR'],
    },
    estado: {
        type: String,
        required: true,
        enum: ['PENDIENTE', 'AUTORIZADO', 'NO_AUTORIZADO'],
        default: 'PENDIENTE',
    }
},{
    toJSON:{virtuals: true},
    toObject:{virtuals: true}
});

usuarioSchema.virtual('proyectos', {
    ref: 'Proyecto',
    localField: "_id",
    foreignField: 'proyecto',
})
usuarioSchema.virtual('avances', {
    ref: 'Avance',
    localField: "_id",
    foreignField: 'usuario',
})
usuarioSchema.virtual('inscripciones', {
    ref: 'Inscripcion',
    localField: "_id",
    foreignField: 'usuario',
})

const UsuarioModel = model('Usuario', usuarioSchema);

export { UsuarioModel };