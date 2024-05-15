# Ejercicio 4. Teoría

## a) ¿Qué son, para qué sirven y cómo se utilizan FormControl, FormGroup y FormBuilder?

**FormControl**

Es un bloque de construcción básico para formularios reactivos. Representa un único campo de entrada, como un cuadro de texto o un selector de fecha.
Sirve para almacenar el valor del campo de entrada, realiza validaciones y controla el estado del campo (vaciado, sucio, válido, inválido).
Y se utiliza usando la clase FormControl y se le pasa un valor inicial y un objeto de opciones de validación (opcional).

**FormGroup**

Es un contenedor para agrupar varios FormControl y crear formularios más complejos.
Sirve para gestionar el valor y el estado general del formulario, así como la interacción entre los diferentes campos de entrada.
Se utiliza creando la clase FormGroup y se le pasa un objeto que mapea los nombres de los campos a sus respectivos FormControl.

**FormBuilder**

Es una herramienta que facilita la creación de formularios reactivos.
Sirve para proporcionar una sintaxis más concisa y reduce la cantidad de código repetitivo necesario para construir formularios.
Al inyectarse el servicio FormBuilder en el componente y se utiliza su método group para crear un FormGroup o un FormControl.

## b) Busca en la página oficial de Angular (o utiliza un recurso de O’Reilly) en el que se especifiquen todos los validadores que incluye Angular para ser utilizados en los formularios reactivos. Construye una tabla de resumen de estos.

La página oficial de Angular (https://angular.io/guide/form-validation) ofrece una tabla completa con todos los validadores disponibles, incluyendo su descripción, sintaxis y ejemplos de uso.

Tabla resumen de validadores

| Validador            | Descripción               | Sintaxis             | Ejemplo de uso                                                                                  |
| -------------------- | ------------------------- | -------------------- | ----------------------------------------------------------------------------------------------- |
| required             | Campo obligatorio         | required             | this.formGroup.get('nombre').setValidators([required])                                          |
| minlength(minLength) | Longitud mínima           | minlength(minLength) | this.formGroup.get('password').setValidators([minlength(6)])                                    |
| maxlength(maxLength) | Longitud máxima           | maxlength(maxLength) | this.formGroup.get('bio').setValidators([maxlength(255)])                                       |
| pattern(pattern)     | Patrón de caracteres      | pattern(pattern)     | this.formGroup.get('email').setValidators([pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]) |
| email                | Correo electrónico válido | email                | this.formGroup.get('email').setValidators([email])                                              |
| min(minValue)        | Valor mínimo              | min(minValue)        | this.formGroup.get('edad').setValidators([min(18)])                                             |
| max(maxValue)        | Valor máximo              | max(maxValue)        | this.formGroup.get('precio').setValidators([max(100)])                                          |

## c) ¿Qué son, cuáles son y para qué sirven los estados en los formularios reactivos?

Los formularios reactivos en Angular tienen tres estados principales: visited, changed y valid. De los que lo más usual es revisar:

**Pristine**: El formulario no ha sido modificado desde su creación.
**Touched**: Al menos un campo del formulario ha sido tocado (enfocado y luego desenfocado).
**Dirty**: Al menos un campo del formulario ha sido modificado (su valor ha cambiado).

En el libro de O'reilly, capitulo 7 tenemos esta tabla con lostres estados:

| Control state | CSS class if True | CSS class if False |
| ------------- | ----------------- | ------------------ |
| Visited       | ng-touched        | ng-untouched       |
| Changed       | ng-dirty          | ng-pristine        |
| Valid         | ng-valid          | ng-invalid         |

Estos estados son útiles para controlar la validación y el comportamiento del formulario en diferentes situaciones. Por ejemplo, podemos mostrar mensajes de error solo para campos que han sido tocados o deshabilitar el botón de envío si el formulario no está válido o no ha sido modificado.

## Referencias

- https://angular.io/guide/reactive-forms
- https://www.oreilly.com/library/view/angular-the/9781788998437/
- https://www.freecodecamp.org/news/tag/angular/
