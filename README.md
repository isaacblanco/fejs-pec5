# PEC 5 - Front end Javascript

- Login UOC: isaacblanco
- Nombre y apellidos del alumno: isaac blanco

URL git hub: https://github.com/isaacblanco/fejs-pec5.git

## Breve descripción

Se ha reciclado el ejercicio del ecommerce anterior en el estado en que se entrego.
En lugar de usar bootstrap, he usado mis propios estilos, dos formulairos y un menu es algo muy sencillo.
El menu lo puse en el app.compoment.html, justo antes del router-outlet, así esta siempre disponible.

```html
<app-header></app-header> <router-outlet></router-outlet>
```

Los ruteos han sido breves:

```typescript
const routes: Routes = [
  {
    path: "",
    component: ArticleListComponent,
  },
  {
    path: "new-template",
    component: ArticleNewTemplateComponent,
  },
  {
    path: "new-reactive",
    component: ArticleNewReactiveComponent,
  },
];
```

## Dificultades

Ninguna, siguiendo el libro de O'reilly, esta todo claro.

## Mejoras

Ninguna, supongo que cuando se graben datos será otra historia.

## Notas

Se me ha pasado prácticamente el usar el control de versiones, no obstante, el proyecto se encuentra en https://github.com/isaacblanco/fejs-pec5
