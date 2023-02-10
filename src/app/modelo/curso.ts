import { Horario } from "./horario";

export interface Curso {
    nombreCurso: string;
    profesorAsignado: string;
    clases: Horario[];
}
