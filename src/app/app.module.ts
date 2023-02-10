import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './compononente/navbar/navbar.component';
import { ListaAlumnosComponent } from './compononente/lista-alumnos/lista-alumnos.component';
import { FormularioAlumnoComponent } from './compononente/formulario-alumno/formulario-alumno.component';
import { BajaAlumnoComponent } from './compononente/baja-alumno/baja-alumno.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { NombreCompletoPipe } from './nombre-completo.pipe';
import { CabecerasTitulos20Directive } from './cabeceras-titulos-20.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListaAlumnosComponent,
    FormularioAlumnoComponent,
    BajaAlumnoComponent,
    NombreCompletoPipe,
    CabecerasTitulos20Directive
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatOptionModule,
    MatSelectModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
