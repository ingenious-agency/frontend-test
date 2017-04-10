import Ember from 'ember';

export function initialize(/* application */) {
  // application.inject('route', 'foo', 'service:foo');
    Ember.LinkComponent.reopen({
        attributeBindings: ['data-tooltip']
    });

}

export default {
  name: 'helpers',
  initialize
};
