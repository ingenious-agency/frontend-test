import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        saveEvent(event) {
            event.save().then(() => this.transitionToRoute('events.index'));
        }
    }
});
