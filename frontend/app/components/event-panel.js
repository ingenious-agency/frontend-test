import Ember from 'ember';
import DateUtil from '../utilities/date-util';

export default Ember.Component.extend({
    date: Ember.computed('event', function () {
        return DateUtil(this.get('event').get('dates')[0]);
    }),
    twitterTwit: Ember.computed('event', function () {
        const event = this.get('event');
        const date = this.get('date');
        const text = `I'll go to ${event.get('title')} @ ${date.date} ${date.time}`;
        const url = `${this.get('eventURL')}/${event.id}`;
        const href = `https://twitter.com/intent/tweet?text=${encodeURI(text)}&url=${url}`

        return href;
    }),
    actions: {
        twitEvent (event) {
            Ember.Logger.debug(event);
        }
    }
});
