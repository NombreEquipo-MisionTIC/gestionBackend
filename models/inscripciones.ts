//Esto es TypeScript
enum Enum_Rol {
    estudiante = "Estudiante",
    lider = "Líder",
    administrador = "Administrador"
}
interface Usuario {
    nombre: string;
    apellido: string;
    correo: string;
    identificacion: string;
    rol: Enum_Rol;
}
//Fin TypeScript