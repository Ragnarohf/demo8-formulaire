import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SaisiePersonneComponent } from './saisie-personne/saisie-personne.component';
import { AffichagePersonnesComponent } from './affichage-personnes/affichage-personnes.component';

@NgModule({
  declarations: [
    AppComponent,
    SaisiePersonneComponent,
    AffichagePersonnesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
