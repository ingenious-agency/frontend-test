import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
    model() {
        return RSVP.hash({
            events: this.get('store').findAll('event'),
            featured: Ember.$
                .getJSON(this.get('store').adapterFor('event').buildURL('event') + '/featured/')
                .then(response => {
                    const ids = response.events.map(event => event.id);
                    return this.get('store').findByIds('event', ids);
                }),
            eventURL: this.get('store').adapterFor('application').buildURL('event')
        });
    }
});
