    var app = require('../app'),
        $ = require('jquery'),
        Backbone = require('backbone'),
        Marionette = require('backbone.marionette'),
        constants = require('utils/constants'),
        channels = require('../channels'),

        // Views
        GlobalView = require('views/GlobalView.js'),
        BaseView = require('views/BaseView.js'),
        StyleView = require('views/StyleView'),
        IndexView = require('views/IndexView');

    module.exports = Backbone.Marionette.Controller.extend({

        initialize: function () {

            app.onload = true;

            this.bootstrap();

        },

        bootstrap: function () {
            var self = this;

            this.globalView = new GlobalView();
            this.baseView = new BaseView();

            channels.globalChannel.on('navigate', function(options) {
                self.navigate(options);
            });

        },

        navigate: function (options) {

            console.log(">AppController: navigate", options);

            app.onload = false;

            this.url = options.route;
            this.triggerStatus = options.triggerStatus;

            app.appRouter.navigate(this.url, {
                trigger: this.triggerStatus
            });

        },

        /* View Routes
        =========================================== */

        index: function () {
            this.indexView = new IndexView();
            this.indexView.render();
        },

        style: function () {
            this.styleView = new StyleView();
            this.styleView.render();
        },

        default: function (route) {
            console.log('%cRoute /%s does not exist', 'color:white; background:gray; padding: 0 0.25em', route);
        }

    });
