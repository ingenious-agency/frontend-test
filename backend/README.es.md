# Prueba de Ingenious Softworks para candidatos - Aplicación de backend

Como se puede [leer en la letra](../instructions) la app a desarrollar es una cartelera de eventos con funcionalidades básicas. Para ello es necesario tener un backend que provea las operaciones básicas para listar y crear nuevos eventos, esta aplicación hace exactamente eso.

## Índice
* [Pre requisitos](#pre-requisitos)
* [Instalación](#instalación)
* [Servidor de desarrollo](#servidor-de-desarrollo)
* [Servicios expuestos](#servicios-expuestos)
* [Dudas](#dudas)
* [Siguiente paso](#siguiente-paso)

## Pre requisitos

* [node](https://nodejs.org/) & [npm (en general se instala junto con node)](https://www.npmjs.com/#getting-started)
* Permitir escritura en el directorio `backend/app/db/events`.

## Instalación

Para instalar la aplicación simplemente hay que clonarse este repositorio, cambiarse al directorio backend `cd backend` y ejecutar el comando `npm install` para satisfacer las dependencias del proyecto.

Una vez hecho esto para probar que los servicios que el backend provee funcionen correctamente podemos hacer `npm test`.

Si todo sale bien veremos una salida en la consola similar a la siguiente:

```
$ npm test

> ingsw-frontend-test@1.0.0 test /Users/cherta/workspace/ingsw/front-end-test/backend
> node test

TAP version 13
# GET /events returns all events
ok 1 No error
ok 2 should be equivalent
# GET /events/featured returns all featured events
ok 3 No error
ok 4 should be equivalent
# GET /events/:id returns the correct event
ok 5 No error
ok 6 should be equivalent
# GET /events/:id returns 404 when the event doesn't exists
# POST /events creates an event and returns it with an id
ok 7 No error
ok 8 should be equivalent

1..8
# tests 8
# pass  8

# ok
```

### Resumiendo

```
$ git clone git@github.com:ingsw-dev/frontend-test.git
$ cd frontend-test
$ cd backend
$ npm install
$ npm test
```

## Servidor de desarrollo

Para levantar el servidor de desarrollo podemos ejecutar `npm start` en el directorio `backend` y dejar esa terminal levantada.

El servidor quedará levantado por defecto en `http://localhost:3000`.

## Servicios expuestos

La aplicación expone los siguientes servicios:

* [Listar eventos](#listar-eventos)
* [Eventos destacados](#eventos-destacados)
* [Devolver evento por id](#devolver-evento-por-id)
* [Crear evento](#crear-evento)

### Listar eventos
Lista todos los eventos que hay en el sistema

#### Endpoint
GET /events

#### Respuesta
```json
{
  "events": [
    {
      "id": 1,
      "title": "24 Festival de Cine para Niños y Jóvenes – Divercine",
      "eventImage": "http://www.cartelera.com.uy/imagenes_espectaculos/moviedetail13/17511.jpg",
      "description": "Del lunes 27 de julio al sábado 1º de agosto se desarrolla en el Auditorio del SODRE Nelly Goitiño (18 de Julio y Rio Branco) el 24 Festival de Cine para Niños y Jóvenes - Divercine. La programación, que incluye películas de largo, medio y cortometraje de varias partes del mundo, está dividida en tres franjas de horarios cada día, de acuerdo a las edades del público a las que van dirigidas: a las 13 horas a partir de 3 años de edad; a las 14 horas a partir de los 6 años de edad; y desde las 15 se programan los medio y largometrajes para niños más grandes y adolescentes.",
      "dates": [
        "07/27/2015 13:00",
        "07/28/2015 13:00",
        "07/29/2015 13:00",
        "07/30/2015 13:00",
        "07/31/2015 13:00",
        "07/1/2015 13:00"
      ],
      "location": "Auditorio del SODRE"
    },
    {
      "id": 2,
      "title": "24 Festival de Cine para Niños y Jóvenes – Divercine",
      "eventImage": "http://www.cartelera.com.uy/imagenes_espectaculos/moviedetail13/17511.jpg",
      "description": "Del lunes 27 de julio al sábado 1º de agosto se desarrolla en el Auditorio del SODRE Nelly Goitiño (18 de Julio y Rio Branco) el 24 Festival de Cine para Niños y Jóvenes - Divercine. La programación, que incluye películas de largo, medio y cortometraje de varias partes del mundo, está dividida en tres franjas de horarios cada día, de acuerdo a las edades del público a las que van dirigidas: a las 13 horas a partir de 3 años de edad; a las 14 horas a partir de los 6 años de edad; y desde las 15 se programan los medio y largometrajes para niños más grandes y adolescentes.",
      "dates": [
        "07/27/2015 13:00",
        "07/28/2015 13:00",
        "07/29/2015 13:00",
        "07/30/2015 13:00",
        "07/31/2015 13:00",
        "07/1/2015 13:00"
      ],
      "location": "Auditorio del SODRE"
    }
  ]
}
```

### Eventos Destacados
Devuelve los eventos destacados.

#### Endpoint
GET /events/featured

#### Respuesta
```json
{
  "events": [
    {
      "id": 1,
      "title": "24 Festival de Cine para Niños y Jóvenes – Divercine",
      "eventImage": "http://www.cartelera.com.uy/imagenes_espectaculos/moviedetail13/17511.jpg",
      "description": "Del lunes 27 de julio al sábado 1º de agosto se desarrolla en el Auditorio del SODRE Nelly Goitiño (18 de Julio y Rio Branco) el 24 Festival de Cine para Niños y Jóvenes - Divercine. La programación, que incluye películas de largo, medio y cortometraje de varias partes del mundo, está dividida en tres franjas de horarios cada día, de acuerdo a las edades del público a las que van dirigidas: a las 13 horas a partir de 3 años de edad; a las 14 horas a partir de los 6 años de edad; y desde las 15 se programan los medio y largometrajes para niños más grandes y adolescentes.",
      "dates": [
        "07/27/2015 13:00",
        "07/28/2015 13:00",
        "07/29/2015 13:00",
        "07/30/2015 13:00",
        "07/31/2015 13:00",
        "07/1/2015 13:00"
      ],
      "location": "Auditorio del SODRE"
    }
  ]
}
```

### Devolver evento por id
Devuelve un evento por id. En caso de que el evento no exista devuelve 404.

#### Endpoint
GET /events/:id

#### Respuesta
```json
{
  "event": {
    "id": 1,
    "title": "24 Festival de Cine para Niños y Jóvenes – Divercine",
    "eventImage": "http://www.cartelera.com.uy/imagenes_espectaculos/moviedetail13/17511.jpg",
    "description": "Del lunes 27 de julio al sábado 1º de agosto se desarrolla en el Auditorio del SODRE Nelly Goitiño (18 de Julio y Rio Branco) el 24 Festival de Cine para Niños y Jóvenes - Divercine. La programación, que incluye películas de largo, medio y cortometraje de varias partes del mundo, está dividida en tres franjas de horarios cada día, de acuerdo a las edades del público a las que van dirigidas: a las 13 horas a partir de 3 años de edad; a las 14 horas a partir de los 6 años de edad; y desde las 15 se programan los medio y largometrajes para niños más grandes y adolescentes.",
    "dates": [
      "07/27/2015 13:00",
      "07/28/2015 13:00",
      "07/29/2015 13:00",
      "07/30/2015 13:00",
      "07/31/2015 13:00",
      "07/1/2015 13:00"
    ],
    "location": "Auditorio del SODRE"
  }
}
```

### Crear evento
Crea un evento

#### Endpoint
POST /events

#### Respuesta
```json
{
  "event": {
    "id": 1,
    "title": "24 Festival de Cine para Niños y Jóvenes – Divercine",
    "eventImage": "http://www.cartelera.com.uy/imagenes_espectaculos/moviedetail13/17511.jpg",
    "description": "Del lunes 27 de julio al sábado 1º de agosto se desarrolla en el Auditorio del SODRE Nelly Goitiño (18 de Julio y Rio Branco) el 24 Festival de Cine para Niños y Jóvenes - Divercine. La programación, que incluye películas de largo, medio y cortometraje de varias partes del mundo, está dividida en tres franjas de horarios cada día, de acuerdo a las edades del público a las que van dirigidas: a las 13 horas a partir de 3 años de edad; a las 14 horas a partir de los 6 años de edad; y desde las 15 se programan los medio y largometrajes para niños más grandes y adolescentes.",
    "dates": [
      "07/27/2015 13:00",
      "07/28/2015 13:00",
      "07/29/2015 13:00",
      "07/30/2015 13:00",
      "07/31/2015 13:00",
      "07/1/2015 13:00"
    ],
    "location": "Auditorio del SODRE"
  }
}
```

## Doubts
If having any doubts, you can always [email us](mailto:gchertok@ingsw.com), and we will do our best to help you.

## Next step
Once you have the backend working you can go ahead and read the [user stories](../instructions).
