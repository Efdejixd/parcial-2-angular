import { Education, Skill, LearningTopic, Game } from '../models/data.models';
export const EDUCATION: Education[] = [
 { title:'Ingeniería de Sistemas — cuarto semestre', institution:'Unidad Central del Valle del Cauca (UCEVA)', detail:'Tuluá, Valle del Cauca · Formación en curso' }
];
export const SKILLS: Skill[] = [
 {name:'HTML',level:'En formación'}, {name:'CSS',level:'En formación'},
 {name:'JavaScript',level:'En formación'}, {name:'TypeScript',level:'En formación'},
 {name:'Angular',level:'En formación'}
];
// Contenidos representados por la solución de este parcial. Modificar si el temario visto en clase difiere.
export const TOPICS: LearningTopic[] = [
 {title:'HTML y estructura web',description:'Organización semántica del contenido de una página.',technology:'HTML'},
 {title:'CSS y estilos',description:'Diseño de componentes, colores, tipografía y distribución adaptable.',technology:'CSS / Bootstrap 5'},
 {title:'JavaScript y TypeScript',description:'Variables, objetos, arreglos, interfaces y datos tipados.',technology:'TypeScript'},
 {title:'Componentes de Angular',description:'Separación de la hoja de vida en partes reutilizables.',technology:'Angular 20'},
 {title:'Enrutamiento',description:'Navegación entre la hoja de vida, el aprendizaje y el tema libre.',technology:'Angular Router'},
 {title:'Renderizado dinámico',description:'Generación de tarjetas desde listas de datos con @for.',technology:'Angular @for'}
];
export const GAMES: Game[] = [
 {id:1,title:'Roblox',genre:'Multijugador',description:'Plataforma de experiencias y juegos creados por usuarios.',tag:'Comunidad'},
 {id:2,title:'Minecraft',genre:'Construcción',description:'Exploración y construcción creativa en mundos de bloques.',tag:'Creatividad'},
 {id:3,title:'The Forest',genre:'Supervivencia',description:'Aventura donde se explora, construye y sobrevive.',tag:'Exploración'},
 {id:4,title:'Prototype 2',genre:'Acción',description:'Juego de acción y mundo abierto.',tag:'Aventura'}
];
