import Ember from 'ember';

export default Ember.Component.extend({
    didInsertElement() {
        this._super(...arguments);
        Ember.run.scheduleOnce('afterRender', this, 'processChildElements');
        this
    },
    processChildElements() {
        var time = this
            .$('input')
            .first()
                .data('theme', 'spectre-datedropper')
                .data('large-mode', true)
                .dateDropper()
            .next()
                .timeDropper({
                    format: 'HH:mm'
                });

        /** Setting values to none after jquery plugins execution  */
        this.set('newTime', time.val());
        // this.set('newDate', );
    },
    actions: {
        addDate () {
            const $el = this.$('input');
            const date = $el.first().val();
            const time = $el.last().val();

            if (date.length && time.length) {
                this.get('addDate')(date, time);
            }
        },
        updateDate (event) {
            Ember.Logger.log(event, 'date');
        },
        updateTime (event) {
            Ember.Logger.log(event, 'time');
        }
    }
});
