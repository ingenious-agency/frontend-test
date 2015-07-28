var fs = require('fs');
var test = require('tape');
var request = require('supertest');
var app = require('../app/server');

var expectedEvents = {events: [ require('../app/db/events/1.json'), require('../app/db/events/2.json') ]}
var expectedEvent = {event: require('../app/db/events/2.json')};
var expectedFeaturedEvents = {events: [ require('../app/db/events/2.json') ] };
var postEvent = {
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
};

test('GET /events returns all events', function (t) {
  t.plan(2);
  request(app)
    .get('/events')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      t.error(err, 'No error');
      t.same(res.body, expectedEvents);

      t.end();
    });
});

test('GET /events/featured returns all featured events', function (t) {
  t.plan(2);
  request(app)
    .get('/events/featured')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      t.error(err, 'No error');
      t.same(res.body, expectedFeaturedEvents);

      t.end();
    });
});

test('GET /events/:id returns the correct event', function (t) {
  t.plan(2);
  request(app)
    .get('/events/2')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      t.error(err, 'No error');
      t.same(res.body, expectedEvent);
      t.end();
    });
});

test('GET /events/:id returns 404 when the event doesn\'t exists', function (t) {
  request(app)
    .get('/events/999')
    .expect('Content-Type', /json/)
    .expect(404)
    .end(function (err, res) {
      t.end();
    });
});

test('POST /events creates an event and returns it with an id', function (t) {
  request(app)
    .post('/events')
    .set('Accept', 'application/json')
    .send({event: postEvent})
    .end(function (err, res) {
      t.error(err, 'No error');
      
      postEvent.id = 3;
      t.same(res.body, {event: postEvent});

      fs.unlinkSync(__dirname + '/../app/db/events/3.json');

      t.end();
    });
});