import Ember from 'ember';
// import RSVP from 'rsvp';


export default Ember.Route.extend({
    model(params) {
        return this.get('store')
            .findRecord('event', params.event)
            .catch(() => {
                this.transitionTo('events');
            });
    },
    afterModel(model) {
        if(model.get('isError')) {
            this.transition.to('events.index');
        }
    }
});
