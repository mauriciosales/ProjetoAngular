
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CursosModule } from './cursos/cursos.module';
import { AppComponent } from './app.component';
import { Meuprimeiro2Component } from './meuprimeiro2/meuprimeiro2.component';

@NgModule({
  declarations: [
    AppComponent,
    Meuprimeiro2Component
  ],
  imports: [
    BrowserModule,
    CursosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
