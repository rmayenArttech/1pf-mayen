import { Curso } from "./curso";

export interface EstudianteInscrito {
    nombre: string;
    matricula: string;
    curso: Curso[];
}
