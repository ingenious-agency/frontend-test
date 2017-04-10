import DS from 'ember-data';

export default DS.Transform.extend({
  deserialize(serialized) {

    return serialized.sort().map((item) => {
        const datetime = item.split(' ');
        return {
            date: datetime[0],
            time: datetime[1]
        };
    });
  },

  serialize(deserialized) {
    let serialized = deserialized.map(item => [item.date, item.time].join(' '));

    return serialized;
  }
});
