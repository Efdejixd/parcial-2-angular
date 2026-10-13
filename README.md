# Parcial II — Programación en Ambiente Web I

**Estudiante:** Andres Felipe Bedoya Arenas  
**Código:** 230251058  
**Semestre:** 4  
**Institución:** UCEVA — Tuluá, Valle del Cauca  
**GitHub:** https://github.com/Efdejixd

Aplicación Angular 20 con tres páginas (hoja de vida, aprendizaje y videojuegos), enrutamiento, Bootstrap 5, interfaces TypeScript y listas dinámicas con `@for`.

## Iniciar el proyecto

Instala Node.js compatible con Angular 20 y abre esta carpeta en Visual Studio Code. En su terminal ejecuta:

```bash
npm install
npm start
```

Abre http://localhost:4200/. Para comprobar la compilación: `npm run build`.

## Archivos principales

- `src/app/app.routes.ts`: rutas y navegación.
- `src/app/components/`: perfil y estudios/habilidades como componentes.
- `src/app/pages/`: las tres secciones solicitadas.
- `src/app/models/data.models.ts`: interfaces de los datos.
- `src/app/data/portfolio.data.ts`: datos dinámicos con tipos.
- `src/styles.css`: estilos.

## Publicación en GitHub

Crea primero un repositorio **vacío** llamado `parcial-2-angular` en https://github.com/new, desde tu cuenta `Efdejixd`. Luego, desde la carpeta de este proyecto:

```bash
git init
git add .
git commit -m "feat: crear parcial II en Angular con tres secciones"
git branch -M main
git remote add origin https://github.com/Efdejixd/parcial-2-angular.git
git push -u origin main
```

En posteriores cambios utiliza mensajes de commit descriptivos. No subas `node_modules`, porque ya está en `.gitignore`.

**Nota:** el enlace al repositorio es una propuesta, no indica que el repositorio ya esté creado. Verifica que la publicación haya funcionado antes de entregarlo.

## Entrega

El PDF final debe indicar nombre completo, código estudiantil y enlace real del repositorio de GitHub. No se incluye un enlace de repositorio ficticio como si ya estuviera publicado.
