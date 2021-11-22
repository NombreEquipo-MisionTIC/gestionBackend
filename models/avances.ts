//Esto es TypeScript
enum Enum_Rol {
    estudiant = "Estudiante",
    lide = "Líder",
    administrado = "Administrador"
}
interface Usuario {
    nombre: string;
    apellido: string;
    correo: string;
    identificacion: string;
    rol: Enum_Rol;
}
//Fin TypeScript