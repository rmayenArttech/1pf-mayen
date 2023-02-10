import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {

  title!: string;

  columnas: string[] = ['nombre', 'edad', 'matricula'];
  nombres: string[] = ['Juan', 'Pedro', 'María', 'Ana', 'Luis', 'José', 'Carlos', 'Sofía', 'Marta', 'Lucía'];
  apellidos: string[] = ['Pérez', 'García', 'Rodríguez', 'Martínez', 'González', 'López', 'Sánchez', 'Díaz', 'Fernández', 'Ruiz'];
  datasource: any[] = [];

  constructor(){
    this.generarDatosRandom();
  }

  ngOnInit(): void {
    this.title = "Lista de Alumnos"
    
  }

  generarDatosRandom() {
    for (let i = 1; i <= 10; i++) {
      const nombre = this.nombres[Math.floor(Math.random() * this.nombres.length)];
      const apellido1 = this.apellidos[Math.floor(Math.random() * this.apellidos.length)];
      const apellido2 = this.apellidos[Math.floor(Math.random() * this.apellidos.length)];
      const matricula = `${Math.floor(Math.random() * 100000000)}`;
      const email = `${nombre.toLowerCase()}.${apellido1.toLowerCase()}@email.com`;
      const numeroTelefono = `555-${Math.floor(Math.random() * 1000)}-${Math.floor(Math.random() * 1000)}`;
      const fechaNacimiento = `${Math.floor(Math.random() * 12 + 1)}/${Math.floor(Math.random() * 28 + 1)}/19${Math.floor(Math.random() * 100 + 1)}`;
      const edad = Math.floor(Math.random() * 50 + 18);
      const urlImagen = `https://picsum.photos/id/${Math.floor(Math.random() * 1000)}/200/300`;

      this.datasource.push({nombre, apellido1, apellido2, matricula, email, numeroTelefono, fechaNacimiento, edad, urlImagen
      });
    }

  }
}
