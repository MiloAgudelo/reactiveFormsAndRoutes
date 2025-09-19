# Taller de Angular – Formularios Reactivos, Rutas y Componentes

## Objetivo general
Que el estudiante desarrolle competencias prácticas en la creación, validación y manejo de formularios reactivos con FormGroup, así como en el montaje y navegación entre componentes utilizando rutas básicas en Angular.

## Actividades

### Creación de proyecto
Crear un proyecto Angular nuevo con soporte para standalone components. Configurar AppComponent como raíz y dejar una ruta principal (/home). Evaluable: el proyecto compila y muestra correctamente un mensaje de bienvenida.

### Rutas iniciales
Configurar al menos tres rutas: /home, /about y /contact. Cada ruta debe mostrar un componente diferente con un texto identificador. Evaluable: navegación funcional usando routerLink y router-outlet.

### Formulario simple (reactivo)
Crear un componente login con un formulario reactivo con FormGroup que tenga: Email y Password. Validaciones: email válido, password mínimo 6 caracteres. Evaluable: mostrar mensajes de error cuando el usuario intente enviar vacío.

### Validaciones personalizadas
Agregar un campo username en login y aplicar validación personalizada: no permitir espacios en blanco y debe tener mínimo 4 caracteres. Evaluable: validar en tiempo real y mostrar errores en la vista.

### Formulario de registro
Crear un componente register con un formulario que use FormGroup para agrupar campos: Datos personales (nombre, edad) y Datos de acceso (email, password). Evaluable: que los dos grupos (FormGroup) estén bien definidos y validados.

### Módulo de contacto con formulario
Crear un componente contact-form que contenga un formulario con: Nombre, Email, Mensaje. Validar que todos los campos sean obligatorios y que el email tenga formato válido. Evaluable: el formulario debe mostrar errores y no permitir enviar vacío.

### Navegación entre componentes
Crear un menú principal que permita navegar entre los componentes home, about, contact, login y register. Evaluable: el menú debe estar presente en todas las vistas y la navegación debe funcionar correctamente.

### Estilos y retroalimentación visual
Aplicar estilos CSS para que los campos inválidos se pinten de rojo y los válidos de verde. Evaluable: al escribir en los formularios, el estudiante debe ver en tiempo real la retroalimentación visual.

### Validación asincrónica (sencilla)
En el formulario de registro, agregar un campo email que valide de forma asincrónica (con AsyncValidator) si ya existe en una lista simulada de emails registrados. Evaluable: mostrar mensaje de 'email ya existe' en tiempo real.

### Proyecto final integrador
Construir una aplicación completa que tenga: un sistema de rutas con al menos 5 componentes, un formulario reactivo con FormGroup y validaciones personalizadas, y uso de validación asincrónica en un campo (ejemplo: email). Evaluable: entrega de la aplicación funcionando, con navegación completa y validaciones correctas.
