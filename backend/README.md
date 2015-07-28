# Prueba de Ingenious Softworks para candidatos - Aplicación de backend

Como se puede [leer en la letra](../instructions) la app a desarrollar es una cartelera de eventos con funcionalidades básicas. Para ello es necesario tener un backend que provea las operaciones básicas para listar y crear nuevos eventos, esta aplicación hacee xactamente eso.

## Índice
* [Pre requisitos](#pre-requisitos)
* [Instalación](#instalacion)
* [Servidor de desarrolo](#servidor-de-desarrolo)
* [Servicios expuestos](#servicios-expuestos)
* [Dudas](#dudas)

## Pre requisitos

* [node](https://nodejs.org/) & [npm (en general se instala junto con node)](https://www.npmjs.com/#getting-started)
* Permitir escritura en el directorio `backend/app/db/events`.

## Instalación

Para instalar esta app simplemente hay que cambiarse al directorio backend `cd backend` y ejecutar el comando `npm install` para satisfacer las dependencias del proyecto.

Una vez hecho esto para probar que los servicos que el backend provee funcionen correctamente podemos hacer `npm test`. 

Si todo sale bien veremos una salida en la consola similar a la siguiente:

```
$ npm test

> ingsw-frontend-test@1.0.0 test /Users/cherta/workspace/ingsw/front-end-test/backend
> node test

TAP version 13
# GET /events returns all events
ok 1 No error
ok 2 should be equivalent
# GET /events/:id returns the correct event
ok 3 No error
ok 4 should be equivalent
# GET /events/:id returns 404 when the event doesn't exists
# POST /events creates an event and returns it with an id
ok 5 No error
ok 6 should be equivalent

1..6
# tests 6
# pass  6

# ok
```

## Servidor de desarrollo

Para levantar el servidor de desarrollo podemos ejecutar `npm start` en el directorio `backend` y dejar esa terminal levantada. 

El servidor quedará levantado por defecto en `http://localhost:3000`.

## Servicios expuestos

La aplicación los siguientes servicios:

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
      "title": "24 Festival de Cine para Ni\u00f1os y J\u00f3venes \u2013 Divercine",
      "eventImage": "http:\/\/www.cartelera.com.uy\/imagenes_espectaculos\/moviedetail13\/17511.jpg",
      "description": "Del lunes 27 de julio al s\u00e1bado 1\u00ba de agosto se desarrolla en el Auditorio del SODRE Nelly Goiti\u00f1o (18 de Julio y Rio Branco) el 24 Festival de Cine para Ni\u00f1os y J\u00f3venes - Divercine. La programaci\u00f3n, que incluye pel\u00edculas de largo, medio y cortometraje de varias partes del mundo, est\u00e1 dividida en tres franjas de horarios cada d\u00eda, de acuerdo a las edades del p\u00fablico a las que van dirigidas: a las 13 horas a partir de 3 a\u00f1os de edad; a las 14 horas a partir de los 6 a\u00f1os de edad; y desde las 15 se programan los medio y largometrajes para ni\u00f1os m\u00e1s grandes y adolescentes.",
      "dates": [
        "07\/27\/2015 13:00",
        "07\/28\/2015 13:00",
        "07\/29\/2015 13:00",
        "07\/30\/2015 13:00",
        "07\/31\/2015 13:00",
        "07\/1\/2015 13:00"
      ],
      "location": "Auditorio del SODRE"
    },
    {
      "id": 2,
      "title": "24 Festival de Cine para Ni\u00f1os y J\u00f3venes \u2013 Divercine",
      "eventImage": "http:\/\/www.cartelera.com.uy\/imagenes_espectaculos\/moviedetail13\/17511.jpg",
      "description": "Del lunes 27 de julio al s\u00e1bado 1\u00ba de agosto se desarrolla en el Auditorio del SODRE Nelly Goiti\u00f1o (18 de Julio y Rio Branco) el 24 Festival de Cine para Ni\u00f1os y J\u00f3venes - Divercine. La programaci\u00f3n, que incluye pel\u00edculas de largo, medio y cortometraje de varias partes del mundo, est\u00e1 dividida en tres franjas de horarios cada d\u00eda, de acuerdo a las edades del p\u00fablico a las que van dirigidas: a las 13 horas a partir de 3 a\u00f1os de edad; a las 14 horas a partir de los 6 a\u00f1os de edad; y desde las 15 se programan los medio y largometrajes para ni\u00f1os m\u00e1s grandes y adolescentes.",
      "dates": [
        "07\/27\/2015 13:00",
        "07\/28\/2015 13:00",
        "07\/29\/2015 13:00",
        "07\/30\/2015 13:00",
        "07\/31\/2015 13:00",
        "07\/1\/2015 13:00"
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
      "id": 2,
      "title": "24 Festival de Cine para Ni\u00f1os y J\u00f3venes \u2013 Divercine",
      "eventImage": "http:\/\/www.cartelera.com.uy\/imagenes_espectaculos\/moviedetail13\/17511.jpg",
      "description": "Del lunes 27 de julio al s\u00e1bado 1\u00ba de agosto se desarrolla en el Auditorio del SODRE Nelly Goiti\u00f1o (18 de Julio y Rio Branco) el 24 Festival de Cine para Ni\u00f1os y J\u00f3venes - Divercine. La programaci\u00f3n, que incluye pel\u00edculas de largo, medio y cortometraje de varias partes del mundo, est\u00e1 dividida en tres franjas de horarios cada d\u00eda, de acuerdo a las edades del p\u00fablico a las que van dirigidas: a las 13 horas a partir de 3 a\u00f1os de edad; a las 14 horas a partir de los 6 a\u00f1os de edad; y desde las 15 se programan los medio y largometrajes para ni\u00f1os m\u00e1s grandes y adolescentes.",
      "dates": [
        "07\/27\/2015 13:00",
        "07\/28\/2015 13:00",
        "07\/29\/2015 13:00",
        "07\/30\/2015 13:00",
        "07\/31\/2015 13:00",
        "07\/1\/2015 13:00"
      ],
      "location": "Auditorio del SODRE"
    }
  ]
}
```

### Devolver evento
Devuelve un evento por id. En caso de que el evento no exista devuelve 404.

#### Endpoint
GET /events/:id

#### Respuesta
```json
{
  "event": {
    "id": 1,
    "title": "24 Festival de Cine para Ni\u00f1os y J\u00f3venes \u2013 Divercine",
    "eventImage": "http:\/\/www.cartelera.com.uy\/imagenes_espectaculos\/moviedetail13\/17511.jpg",
    "description": "Del lunes 27 de julio al s\u00e1bado 1\u00ba de agosto se desarrolla en el Auditorio del SODRE Nelly Goiti\u00f1o (18 de Julio y Rio Branco) el 24 Festival de Cine para Ni\u00f1os y J\u00f3venes - Divercine. La programaci\u00f3n, que incluye pel\u00edculas de largo, medio y cortometraje de varias partes del mundo, est\u00e1 dividida en tres franjas de horarios cada d\u00eda, de acuerdo a las edades del p\u00fablico a las que van dirigidas: a las 13 horas a partir de 3 a\u00f1os de edad; a las 14 horas a partir de los 6 a\u00f1os de edad; y desde las 15 se programan los medio y largometrajes para ni\u00f1os m\u00e1s grandes y adolescentes.",
    "dates": [
      "07\/27\/2015 13:00",
      "07\/28\/2015 13:00",
      "07\/29\/2015 13:00",
      "07\/30\/2015 13:00",
      "07\/31\/2015 13:00",
      "07\/1\/2015 13:00"
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
    "title": "24 Festival de Cine para Ni\u00f1os y J\u00f3venes \u2013 Divercine",
    "eventImage": "http:\/\/www.cartelera.com.uy\/imagenes_espectaculos\/moviedetail13\/17511.jpg",
    "description": "Del lunes 27 de julio al s\u00e1bado 1\u00ba de agosto se desarrolla en el Auditorio del SODRE Nelly Goiti\u00f1o (18 de Julio y Rio Branco) el 24 Festival de Cine para Ni\u00f1os y J\u00f3venes - Divercine. La programaci\u00f3n, que incluye pel\u00edculas de largo, medio y cortometraje de varias partes del mundo, est\u00e1 dividida en tres franjas de horarios cada d\u00eda, de acuerdo a las edades del p\u00fablico a las que van dirigidas: a las 13 horas a partir de 3 a\u00f1os de edad; a las 14 horas a partir de los 6 a\u00f1os de edad; y desde las 15 se programan los medio y largometrajes para ni\u00f1os m\u00e1s grandes y adolescentes.",
    "dates": [
      "07\/27\/2015 13:00",
      "07\/28\/2015 13:00",
      "07\/29\/2015 13:00",
      "07\/30\/2015 13:00",
      "07\/31\/2015 13:00",
      "07\/1\/2015 13:00"
    ],
    "location": "Auditorio del SODRE",
    "id": 3
  }
}
```

## Dudas

Si tienes alguna duda nos puedes enviar un email a [gchertok@ingsw.com](mailto: gchertok@ingsw.com) y te ayudaremos con cualquier problema que tengas.

