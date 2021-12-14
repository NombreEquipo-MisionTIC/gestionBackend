import { resolversProyectos } from '../models/proyecto/resolvers.js';
import { resolversUsuarios } from '../models/usuario/resolvers.js';
import { resolversAvance } from '../models/avance/resolvers.js';
import { resolversInscripciones } from '../models/inscripcion/resolvers.js';

export const resolvers = [
  resolversUsuarios,
  resolversProyectos,
  resolversAvance,
  resolversInscripciones,
];
