import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Estudiante } from 'src/app/modelo/estudiante';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-formulario-alumno',
  templateUrl: './formulario-alumno.component.html',
  styleUrls: ['./formulario-alumno.component.css']
})
export class FormularioAlumnoComponent implements OnInit{
  

  title!: string;

  nombre = new FormControl('', [Validators.required]);
  apellido1 = new FormControl('');
  apellido2 = new FormControl('', [Validators.required]);
  matricula = new FormControl('', [Validators.required]);
  fechaNacimiento = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required]);
  numeroTelefono = new FormControl('', [Validators.required]);
  edad = new FormControl(0, [Validators.required]);
  urlImagen = new FormControl('', [Validators.required]);

  estudiante: Estudiante ={
    nombre: '',
    apellido1: '',
    apellido2: '',
    matricula: '',
    email: '',
    numeroTelefono: '',
    fechaNacimiento: '',
    edad: 0,
    urlImagen: '',
  }
  
  
  
  matcher = new MyErrorStateMatcher();

  ngOnInit(): void {
    this.title = "Registrar Nuevo Alumno"
  }
  

  guardarRegistro(){
    this.setObject();
    console.log("alumno creado con exito: " + (JSON.stringify(this.estudiante) ))
  }

  setObject(){
    this.estudiante.nombre = this.nombre.value;
    this.estudiante.apellido1 = this.apellido1.value;
    this.estudiante.apellido2 = this.apellido2.value;
    this.estudiante.matricula= this.matricula.value;
    this.estudiante.fechaNacimiento= this.fechaNacimiento.value;
    this.estudiante.email= this.email.value;
    this.estudiante.numeroTelefono= this.numeroTelefono.value;
    this.estudiante.edad= this.edad.value;
    this.estudiante.urlImagen = this.urlImagen.value;
  }
}
