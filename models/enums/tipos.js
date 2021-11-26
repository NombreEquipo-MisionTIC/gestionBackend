import { gql } from "apollo-server-core";

const tiposEnums = gql`
    enum Enum_EstadoU{
        PENDIENTE
        AUTORIZADO
        NO_AUTORIZADO
    }
    enum Enum_EstadoP{
        ACTIVO
        INACTIVO
    }
    enum Enum_EstadoI {
        ACEPTADA
        RECHAZADA
        PENDIENTE
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
`;

export { tiposEnums };
