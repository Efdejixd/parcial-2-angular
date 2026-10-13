import { Component } from '@angular/core';
import { GAMES } from '../data/portfolio.data';
@Component({selector:'app-games-page',standalone:true,template:`
<header class="mb-4"><div class="eyebrow">PUNTO 3 · TEMA LIBRE</div><h1 class="fw-bold">Videojuegos que me interesan</h1>
<p class="text-secondary">Una muestra dinámica de videojuegos y sus características, construida con datos TypeScript y <code>&#64;for</code>.</p></header>
<div class="row g-4">@for(game of games;track game.id){
<div class="col-md-6 col-xl-3"><article class="card h-100 border-0 shadow-sm"><div class="card-body p-4">
<div class="game-icon mb-3">🎮</div><span class="badge text-bg-dark mb-2">{{game.tag}}</span>
<h2 class="h5">{{game.title}}</h2><small class="text-secondary">{{game.genre}}</small><p class="mt-3 mb-0">{{game.description}}</p>
</div></article></div>
} @empty { <p>No hay videojuegos para mostrar.</p> }</div>
`})
export class GamesPageComponent { readonly games=GAMES; }
