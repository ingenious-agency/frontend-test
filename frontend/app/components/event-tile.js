import Ember from 'ember';
import DateUtil from '../utilities/date-util';

export default Ember.Component.extend({
    date: Ember.computed('event', function () {
        return DateUtil(this.get('event').get('dates')[0]);
    })
});
