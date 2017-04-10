import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('string'),
    description: DS.attr('string'),
    location: DS.attr('string'),
    eventImage: DS.attr('string'),
    dates: DS.attr('stringArray')
});
