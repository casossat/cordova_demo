import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';

import { Routes, RouterModule } from '@angular/router';
import { FormatoNombre } from './pipes/formato-nombre.pipe';

import { ComponenteUnoComponent } from './routing-demo/componente-uno/componente-uno.component'
import { ComponenteDosComponent } from './routing-demo/componente-dos/componente-dos.component'

import { BodyComponent } from './demo_1/body/body.component'
import { HeadComponent } from './demo_1/head/head.component'
import { FooterComponent } from './demo_1/footer/footer.component'
import { SonComponent } from './demo_1/son/son.component'

const router: Routes = [
  { path: '', component: ComponenteUnoComponent },
  { path: 'componenteUno', component: ComponenteUnoComponent },
  { path: 'componenteDos', component: ComponenteDosComponent },
  { path: 'componenteUno/:id', component: ComponenteUnoComponent },
  { path: 'componenteDos/:id', component: ComponenteDosComponent },
  { path: '**', component: ComponenteDosComponent }, //La dirección por defecto debe ir de ultimo siempre
]

@NgModule({
  declarations: [
    AppComponent,
    FormatoNombre,
    ComponenteUnoComponent,
    ComponenteDosComponent,
    BodyComponent,
    HeadComponent,
    FooterComponent,
    SonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(router)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
