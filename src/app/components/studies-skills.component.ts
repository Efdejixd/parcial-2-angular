import { Component } from '@angular/core';
import { EDUCATION, SKILLS } from '../data/portfolio.data';
@Component({selector:'app-studies-skills',standalone:true,template:`
<div class="row g-4"><div class="col-lg-6"><div class="card h-100 border-0 shadow-sm"><div class="card-body p-4">
<h2 class="h4">Formación académica</h2>
@for (item of education; track item.title) { <div class="border-bottom py-3"><h3 class="h6 mb-1">{{item.title}}</h3><div>{{item.institution}}</div><small class="text-secondary">{{item.detail}}</small></div> }
</div></div></div><div class="col-lg-6"><div class="card h-100 border-0 shadow-sm"><div class="card-body p-4">
<h2 class="h4">Conocimientos y habilidades</h2>
@for (skill of skills; track skill.name) { <div class="d-flex justify-content-between align-items-center py-2 border-bottom"><span>{{skill.name}}</span><span class="badge text-bg-primary">{{skill.level}}</span></div> }
</div></div></div></div>`})
export class StudiesSkillsComponent { readonly education=EDUCATION; readonly skills=SKILLS; }
