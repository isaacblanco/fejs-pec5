# Ejercicio 1. Teoría

## a) ¿Cuáles son las principales diferencias entre formularios dirigidos por template y formularios reactivos?

Veasmoslas

**Formularios dirigidos por template**

Se basan en el HTML del template para controlar los formularios y se usan para formularios simples y directos

Ventajas

- Simples y fáciles de entender para principiantes.
- Adecuados para formularios sencillos.

Desventajas:

- Menos control sobre la lógica del formulario.
- Dificultad para manejar formularios complejos.
- Código menos reutilizable.

**Formularios reactivos**

Se basan en un modelo de datos reactivo para gestionar los formularios (uso de formControl, form..., validators..), se usan para formularios complejos y que requieren mayor control

Ventajas:

- Mayor control sobre la lógica del formulario.
- Facilidad para manejar formularios complejos.
- Código más reutilizable y testable.

Desventajas:

- Curva de aprendizaje más pronunciada.
- Sintaxis más compleja.

## b) ¿Qué son, para qué sirven y cómo se utilizan las directivas ngModel y ngModelChange?

**ngModel**
Vincula un campo de entrada del template con una propiedad del componente.
Sincroniza automáticamente el valor del campo con la propiedad.

**ngModelChange**
Emite un evento cada vez que se modifica el valor del campo de entrada.
Permite realizar acciones en respuesta a los cambios del valor con eventos.
Ejemplo:

```HTML
<input type="text" [(ngModel)]="nombre" (ngModelChange)="onNombreChange($event)"
```

## c) ¿Qué son, cuáles son y para qué sirven los estados en los formularios dirigidos por templates?

La misma tabla que hay en el capítulo 7 del libro de O'reilly

| Control state | CSS class if True | CSS class if False |
| ------------- | ----------------- | ------------------ |
| Visited       | ng-touched        | ng-untouched       |
| Changed       | ng-dirty          | ng-pristine        |
| Valid         | ng-valid          | ng-invalid         |

Descripción:

- **Touched**: al menos un campo del formulario ha sido tocado (enfocado y luego desenfocado), lo contrario de **untouched**
- **Dirty**: al menos un campo del formulario ha sido modificado.
- **Pristine**: el formulario no ha sido modificado.
- **Valid**: todos los criterios de validación se cumplen

Para el formulario podrías usar

- **Submitted**: el formulario ha sido enviado.

Utilidad:

- Controlar la validación del formulario.
- Habilitar/deshabilitar botones.
- Mostrar mensajes de error.

## d) ¿Qué ventajas aportan los FormGroup en la composición de formularios?

Las siguientes:

- Mejor **organización** agrupando los campos relacionados en una sola estructura.
- Una **validación** simplificada de campos interdependientes, se conoce el estado general del formulario sobre cada elemento.
- La **reutilización**, dado que facilita la reutilización de componentes de formulario.
- Mayor **facilidad de lectura** ya que mejora la legibilidad del código del formulario.

Ejemplo al crear el formulario reactivo

```TypeScript
this.formulario = new FormGroup({
  nombre: new FormControl('', Validators.required),
  email: new FormControl('', [Validators.required, Validators.email]),
  edad: new FormControl('', Validators.min(18)),
});
```

Decir que los formularios reactivos y FormGroup ofrecen mayor control, flexibilidad y reutilización en la creación de formularios complejos en Angular.
