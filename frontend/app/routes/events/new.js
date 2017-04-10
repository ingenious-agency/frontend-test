import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        /**
         * @todo Move the data from this route to a mixin
         */
        return this.get('store').createRecord('event', {
            title: '',
            description: '',
            location: '',
            dates: [],
            eventImage: ''
        });
    }
});
