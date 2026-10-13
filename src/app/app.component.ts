import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
@Component({selector:'app-root', standalone:true, imports:[RouterLink,RouterLinkActive,RouterOutlet], template:`
<nav class="navbar navbar-expand-lg bg-dark navbar-dark"><div class="container py-2">
 <a class="navbar-brand fw-bold" routerLink="/hoja-de-vida">AF · Parcial II</a>
 <div class="nav-links d-flex flex-wrap gap-2">
  <a class="nav-link px-2" routerLink="/hoja-de-vida" routerLinkActive="active">Hoja de vida</a>
  <a class="nav-link px-2" routerLink="/aprendizaje" routerLinkActive="active">Aprendizaje</a>
  <a class="nav-link px-2" routerLink="/tema-libre" routerLinkActive="active">Tema libre</a>
 </div></div></nav>
<main class="container py-5"><router-outlet /></main>
<footer class="text-center text-secondary py-4 border-top">Programación en Ambiente Web I · Parcial II · Angular 20</footer>
`})
export class AppComponent {}
