# Prueba de Ingenious Softworks para candidatos - Letra

Hola **candidato**! Esperamos que hayas seguido los pasos para [instalar y probar](../backend/README#instalacion) la aplicación backend, si tienes alguna duda nos puedes enviar un email a [gchertok@ingsw.com](mailto: gchertok@ingsw.com).

## Índice
* [Letra](#letra)
* [Requerimientos no funcionales](#requerimientos-no-funcionales)
* [Evaluación](#evaluacion)

## Letra

Se pide desarrollar una Single Page Application que lista y permite crear eventos. El sistema final será una cartelera de eventos muy simple.

Para desarrollarla proveemos un [backend](../backend) que provee todos los [servicios necesarios](../backend/README#servicios-expuestos)

## Historias de usuario

### Listar eventos

Como un usuario debo ver un listado inicial de eventos ordenados por fecha.

### Compartir evento

Como un usuario haciendo click en el botón compartir de un evento debo poder compartir el mismo en twitter.

El twit será el siguiente: "Iré al NOMBRE DEL EVENTO @ FECHA DEL EVENTO LINK DEL EVENTO".

### Ver detalle del evento

Como un usuario haciendo click en un evento debo navegar a otra página de detalleque liste además del nombre del mismo el resto de sus atributos.

### Listar eventos destacados

Como un usuario en la página principal debo ver un listado de eventos destacados.

### Crear evento

Como un usuario debo poder crear un evento con todos sus campos.

* Título
* Descripción
* Lista de fechas
* Lugar
* Imágen

## Requerimientos no funcionales

La aplicación cliente deberá estar escrita en alguna de las siguientes tecnologías:

* Ember
* Angular
* React

No se especifica ninguna versión mínima para las mismas pero es de esperarse que sean versiones estables y soportadas, no es necesario hacer la aplicación en el último release de cada tecnología pero si es un release con soporte.

## Evaluación

La prueba trata de evaluar como un candidato maneja cierta tecnología pero además cómo estructura su código y cómo resuelve los probelmas que se le presentan. 

Con esto queremos decir que si bien la tecnología en cual se realize la aplicación es importante, también lo es desarrollarla con una herramienta con la que el candidato se sienta cómodo y pueda ser eficiente.

De nada sirve entregar una aplicación "andando" en React que no utilize las características del framework, el mismo caso se da si se eligen otros frameworks. 