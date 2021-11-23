import { gql } from 'apollo-server-express';

const tiposInscripcion = gql`
  type Inscripcion {
    _id: ID!
    estado: Enum_EstadoI!
    fechaIngreso: Date
    fechaEgreso: Date
    proyecto: Proyecto!
    estudiante: Usuario!
  }

  type Query {
    Inscripciones: [Inscripcion]
  }

  type Mutation {
    crearInscripcion(
      estado: Enum_EstadoI!
      proyecto: String!
      estudiante: String!
    ): Inscripcion
    aprobarInscripcion(id: String!): Inscripcion
  }
`;

export { tiposInscripcion };