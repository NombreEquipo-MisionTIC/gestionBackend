import { Schema, model } from "mongoose";
//Esto es TypeScript

interface Avance {
    fecha: Date;
    descripcion: string;
    observaciones: [String];
    proyecto: Schema.Types.ObjectId;
    creadopor: Schema.Types.ObjectId;
}
//Fin TypeScript
const avanceSchema = new Schema<Avance>({
    fecha:{
        type:Date,
        required: true,
        unique: true
    },
    descripcion:{
        type:String,
        required: true,
        
    },
    observaciones:{
        type:[String],
        required: true,
    },
    proyecto:{
        type:Schema.Types.ObjectId,
        required: true,
    },
    creadopor:{
        type:Schema.Types.ObjectId,
        required:true
    }

});

const AvanceModel = model('Avance', avanceSchema);

export { AvanceModel };