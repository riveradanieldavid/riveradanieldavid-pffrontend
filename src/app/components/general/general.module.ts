import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { HeaderComponent } from './header/header.component';
// import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    // HeaderComponent,
    // FooterComponent,
  ],
  imports: [
    CommonModule
  ],

  // AL CREAR NUEVOS MÓDULOS CON cli, ESTE NO PUEDE HACERLO TODO BIEN...
  // LE FALTÓ EXPORTAR ESTOS COMPONENTES DE ABAJO.
  // SÍNTOMAS: NO PODER DELCARAR COMPONENTES EN "app.component.html"
  // exports: [HeaderComponent, FooterComponent]
  // Y FALTÓ IMPORTAR LOS NUEVOS MÓDULOS CREADOS EN "app.module.ts"
  // LOS SÍNTOMAS FUERON NO PODER DECLARAR COMPONENTES EN "routing.component.html" DEBIDO A LA FALTA DE IMPORTACIÓN DE LOS NUEVOS MÓDULOS EN "app.module.ts"

})
export class GeneralModule { }



