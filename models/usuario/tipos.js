import { gql } from "apollo-server-core";


const tiposUsuario = gql`

    type Usuario{
        _id: ID!
        nombre: String!
        apellido: String!
        identificacion: String!
        correo: String!
        rol: Enum_Rol!
        estado: Enum_EstadoU!
    }

    type Query{
        Usuarios: [Usuario]
        Usuario(_id: String!): Usuario
    }

    type Mutation{
        crearUsuario(
            nombre: String!
            apellido: String!
            identificacion: String!
            correo: String!
            rol: Enum_Rol!
            estado: Enum_EstadoU
        ): Usuario

        editarUsuario(
            _id: String!
            nombre: String
            apellido: String
            identificacion: String
            correo: String
            rol: Enum_Rol
            estado: Enum_EstadoU
        ): Usuario
        
        eliminarUsuario(
            _id: String!
        ): Usuario
    }
`;

export { tiposUsuario };
