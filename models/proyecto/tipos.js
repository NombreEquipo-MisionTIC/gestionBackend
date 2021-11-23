import { gql } from "apollo-server-core";


const tiposProyecto = gql`

    type Proyecto{
        _id: ID!
        nombre: String!
        presupuesto: Float!
        objetivosGenerales: String!
        objetivosEspecificos: String!
        fechaInicio: Date!
        fechaFin: Date!
        fase: Enum_Fase!
        estado: Enum_EstadoP!
        lider: Usuario!
        avances: [Avance]
        inscripciones: [Inscripcion]
    }

    type Query{
        Proyectos: [Proyecto]
        Proyecto(_id: String!): Proyecto
    }

    type Mutation{    
        crearProyecto(
            nombre: String!
            presupuesto: Float!
            objetivosGenerales: String!
            objetivosEspecificos: String!
            fechaInicio: Date!
            fechaFin: Date!
            fase: Enum_Fase!
            estado: Enum_EstadoP!
            lider: String!
        ): Proyecto

        editarProyecto(
            _id: String!
            nombre: String!
            presupuesto: Float!
            objetivosGenerales: String!
            objetivosEspecificos: String!
            fechaInicio: Date!
            fechaFin: Date!
            fase: Enum_Fase!
            estado: Enum_EstadoP!
            lider: String!
        ): Proyecto
        
        eliminarProyecto(
            _id: String!
        ): Proyecto
    }

`;

export { tiposProyecto };
