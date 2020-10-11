import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './side-nav/side-nav.component';
import { PresentationComponent } from './presentation/presentation.component';
import { FormationComponent } from './formation/formation.component';
import { CompetencesComponent } from './competences/competences.component';
import { ProjetComponent } from './projet/projet.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { SPresentationComponent } from './side-nav/s-presentation/s-presentation.component';
import { SCompetencesComponent } from './side-nav/s-competences/s-competences.component';
import { SContactComponent } from './side-nav/s-contact/s-contact.component';
import { SExprerienceComponent } from './side-nav/s-exprerience/s-exprerience.component';
import { SFormationComponent } from './side-nav/s-formation/s-formation.component';
import { SProjetComponent } from './side-nav/s-projet/s-projet.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    PresentationComponent,
    FormationComponent,
    CompetencesComponent,
    ProjetComponent,
    ExperienceComponent,
    ContactComponent,
    SPresentationComponent,
    SCompetencesComponent,
    SContactComponent,
    SExprerienceComponent,
    SFormationComponent,
    SProjetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
