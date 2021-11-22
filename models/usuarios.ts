import { Schema, model } from "mongoose";
import {Enum_Rol, Enum_EstadoU} from '../enums';

//Esto es TypeScript
interface Usuario {
    nombre: string;
    apellido: string;
    correo: string;
    identificacion: string;
    rol: Enum_Rol;
    estado: Enum_EstadoU;
}
//Fin TypeScript

const usuarioSchema = new Schema<Usuario>({
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
        enum: Enum_Rol
    },
    estado: {
        type: String,
        required: true,
        enum: Enum_EstadoU,
        default: Enum_EstadoU.PENDIENTE
    }
});

const UsuarioModel = model('Usuario', usuarioSchema);

export { UsuarioModel };