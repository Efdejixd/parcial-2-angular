import { Routes } from '@angular/router';
import { CvPageComponent } from './pages/cv-page.component';
import { LearningPageComponent } from './pages/learning-page.component';
import { GamesPageComponent } from './pages/games-page.component';
export const routes: Routes = [
 {path: '', redirectTo: 'hoja-de-vida', pathMatch: 'full'},
 {path: 'hoja-de-vida', component: CvPageComponent, title:'Hoja de vida'},
 {path: 'aprendizaje', component: LearningPageComponent, title:'Aprendizaje'},
 {path: 'tema-libre', component: GamesPageComponent, title:'Tema libre'},
 {path: '**', redirectTo:'hoja-de-vida'}
];
