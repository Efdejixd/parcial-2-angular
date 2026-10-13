import { Component } from '@angular/core';
import { ProfileCardComponent } from '../components/profile-card.component';
import { StudiesSkillsComponent } from '../components/studies-skills.component';
@Component({selector:'app-cv-page',standalone:true,imports:[ProfileCardComponent,StudiesSkillsComponent],template:`
<app-profile-card />
<div class="row g-4 mb-4"><div class="col-lg-6"><section class="card border-0 shadow-sm h-100"><div class="card-body p-4">
<h2 class="h4">Información de contacto</h2>
<p class="mb-2"><strong>Correo:</strong> <a href="mailto:andresfelipebedoya83@gmail.com">andresfelipebedoya83@gmail.com</a></p>
<p class="mb-2"><strong>Ciudad:</strong> Tuluá, Valle del Cauca</p>
<p class="mb-2"><strong>Código estudiantil:</strong> 230251058</p>
<p class="mb-0"><strong>GitHub:</strong> <a href="https://github.com/Efdejixd" target="_blank" rel="noopener noreferrer">github.com/Efdejixd</a></p>
</div></section></div><div class="col-lg-6"><section class="card border-0 shadow-sm h-100"><div class="card-body p-4">
<h2 class="h4">Experiencia y proyectos</h2>
<p>Actualmente continúo mi formación académica. Esta aplicación constituye una práctica de Angular, TypeScript, componentes, rutas y datos dinámicos.</p>
<p class="text-secondary mb-0">No se declara experiencia laboral ni otros proyectos.</p>
</div></section></div></div>
<app-studies-skills />
`})
export class CvPageComponent {}
