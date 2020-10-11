import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SPresentationComponent} from './side-nav/s-presentation/s-presentation.component';
import {SCompetencesComponent} from './side-nav/s-competences/s-competences.component';
import {SContactComponent} from './side-nav/s-contact/s-contact.component';
import {SExprerienceComponent} from './side-nav/s-exprerience/s-exprerience.component';
import {SFormationComponent} from './side-nav/s-formation/s-formation.component';
import {SProjetComponent} from './side-nav/s-projet/s-projet.component';


const routes: Routes = [
  {path: '', redirectTo: 'presentation', pathMatch: 'full'},
  {path: 'presentation', component: SPresentationComponent},
  {path: 'competences', component: SCompetencesComponent},
  {path: 'contact', component: SContactComponent},
  {path: 'experiences', component: SExprerienceComponent},
  {path: 'formation', component: SFormationComponent},
  {path: 'projets', component: SProjetComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
