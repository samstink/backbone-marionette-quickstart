var Marionette = require('backbone.marionette'),
  template = require('templates/styleguide.hbs');

module.exports = Marionette.ItemView.extend({

    el: '#main-region',

    className: 'styleguide',

    template: template,

    initialize: function() {

        console.log('> StyleView: init');

    }

});
