import { Component } from '@angular/core';
import { TOPICS } from '../data/portfolio.data';
@Component({selector:'app-learning-page',standalone:true,template:`
<header class="mb-4"><div class="eyebrow">PUNTO 2</div><h1 class="fw-bold">Aprendizaje del curso</h1>
<p class="text-secondary">Temas y tecnologías aplicados durante el desarrollo de esta aplicación web.</p></header>
<div class="row g-4">
@for (topic of topics; track topic.title) {
<div class="col-md-6 col-xl-4"><article class="card h-100 border-0 shadow-sm"><div class="card-body p-4">
<span class="badge text-bg-primary mb-3">{{topic.technology}}</span><h2 class="h5">{{topic.title}}</h2><p class="text-secondary mb-0">{{topic.description}}</p>
</div></article></div>
} @empty { <p>No hay temas registrados todavía.</p> }
</div>
<section class="card border-0 shadow-sm mt-4"><div class="card-body p-4"><h2 class="h4">Actividades desarrolladas</h2>
<p class="mb-0">Creación de componentes, configuración de páginas y rutas, uso de interfaces TypeScript y presentación de listas dinámicas con <code>&#64;for</code><code>@for</code>. Estas actividades se pueden evidenciar directamente en el código del proyecto.</p>
</div></section>
`})
export class LearningPageComponent { readonly topics=TOPICS; }
