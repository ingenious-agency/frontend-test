import Ember from 'ember';

export default Ember.Component.extend({
    cannotBeSubmitted: true,
    onFormChange: Ember.observer('event.title', 'event.eventImage', 'event.dates', 'event.description', 'event.location', function () {
        const attrs = ['title', 'eventImage', 'dates', 'description', 'location'];
        const attributes = this.get('event').changedAttributes();
        const isValid = this.get('validators');
        return this.set('cannotBeSubmitted', !attrs.every(attr => (isValid[attr] || isValid['title'])(attributes[attr])));
    }),
    validators: {
        title: function (title) {
            if (Ember.isArray(title)) {
                if (title[title.length - 1].length > 0) {
                    return true;
                }
            }
            return false;
        },
        eventImage: function (image) {
            const isUrl = /^(https?:\/\/)?([\da-z\.-]+\.[a-z\.]{2,6}|[\d\.]+)([\/:?=&#]{1}[\da-z\.-]+)*[\/\?]?$/igm;
            if (Ember.isArray(image)) {
                if (isUrl.test(image[image.length - 1])) {
                    return true;
                }
            }
            return false;
        },
        dates: function (dates) {
            const isTime = /([01]?[0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?/g;
            const isDate = /([0-2][0-9]|3[0-1])\/(0?[0-9]|1[0-2])\/([0-9]{4})/g;

            if (Ember.isArray(dates)) {
                const testDates = dates[dates.length - 1];
                if ( testDates.length > 0 && testDates.every(date => {
                    isDate.lastIndex = isTime.lastIndex = 0;
                    return isDate.test(date.date) && isTime.test(date.time)
                })) {
                    return true;
                }
            }
            return false;
        }
    },
    actions: {
        addDate(date, time) {
            var event = this.get('event');
            var dates = event.get('dates');

            event.set('dates', dates.concat({date, time}));
        },
        deleteDate(date) {
            var event = this.get('event');
            var dates = event.get('dates');

            event.set('dates', dates.filter(function (item) {
                return date !== item;
            }));
        },
        saveEvent(event) {
            /**
             * Add validation here
             */
            this.get('saveEvent')(event);
        }

    }
});
