var $ = require('jquery'),
    _ = require('underscore'),
    Backbone = require('backbone'),
    Marionette = require('backbone.marionette'),
    template = require('templates/index.hbs'),
    helper = require('../utils/helpers');

module.exports = Marionette.ItemView.extend({

    el: '#main-region',

    //className: 'index',

    template: template,

    initialize: function() {

        console.log('> IndexView: init');

    },

    onRender: function() {

    }

});