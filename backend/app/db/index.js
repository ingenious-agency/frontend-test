var fs = require('fs');
var path = require('path');
var eventsDir = path.join(__dirname, 'events');

function findAll () {
  return fs
    .readdirSync(eventsDir)
    .map(function (fileName) {
      return JSON.parse(fs.readFileSync(path.join(eventsDir, fileName)));
    });
}

function finById (id) {
  var fileName = fs
    .readdirSync(eventsDir)
    .filter(function (fileName) {
      return fileName === String(id + '.json');
    })[0];
  if(fileName) {
    var jsonEvent = fs.readFileSync(path.join(eventsDir, fileName));
    return JSON.parse(jsonEvent);  
  } else {
    return false;
  }
}

function create (event) {
  event.id = lastId() + 1;
  var jsonEvent = JSON.stringify(event);
  fs.writeFileSync(path.join(eventsDir, event.id + '.json'), jsonEvent);
  return event;
}

function featured () {
  return fs
    .readdirSync(eventsDir)
    .map(function (fileName) {
      return JSON.parse(fs.readFileSync(path.join(eventsDir, fileName)));
    })
    .filter(function (event) {
      return event.id % 2 === 0;
    });
}

function lastId () {
  return fs
    .readdirSync(eventsDir)
    .map(function (fileName) {
      return Number(fileName.split('.')[0]);
    })
    .sort(function (a, b) {
      return b - a;
    })[0];
}

module.exports = {
  findAll: findAll,
  finById: finById,
  featured: featured,
  create: create
};

