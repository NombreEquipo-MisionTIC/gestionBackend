import { gql } from "apollo-server-core";


const typeDefs = gql`

    scalar Date

    enum Enum_EstadoU{
        PENDIENTE
        AUTORIZADO
        NO_AUTORIZADO
    }
    enum Enum_EstadoP{
        ACTIVO
        INACTIVO
    }
    enum Enum_Fase{
        INICIADO
        EN_DESARROLLO
        TERMINADO
        NULO
    }
    enum Enum_Rol {
        ESTUDIANTE
        LIDER
        ADMINISTRADOR
    }

    type Usuario{
        _id: ID!
        nombre: String!
        apellido: String!
        identificacion: String!
        correo: String!
        rol: Enum_Rol!
        estado: Enum_EstadoU!
    }
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
    }

    type Query{
        Usuarios: [Usuario]
        Usuario(_id: String!): Usuario
        Proyectos: [Proyecto]
        Proyecto(_id: String!): Proyecto
    }

    type Mutation{
        crearUsuario(
            nombre: String!
            apellido: String!
            identificacion: String!
            correo: String!
            rol: Enum_Rol!
            estado: Enum_EstadoU
        ):Usuario

        editarUsuario(
            _id: String!
            nombre: String
            apellido: String
            identificacion: String
            correo: String
            rol: Enum_Rol
            estado: Enum_EstadoU
        ):Usuario
        
        eliminarUsuario(
            _id: String!
        ): Usuario
        
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
            lider: Usuario!
        ): Proyecto
        
        eliminarProyecto(
            _id: String!
        ): Proyecto
    }

`;

export { typeDefs };
