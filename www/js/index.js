requirejs.config({
  paths: {
    'components': '../bower_components',
    'underscore': '../bower_components/underscore/underscore',
    'jquery': '../bower_components/jquery/dist/jquery',
    'require-promise': '../bower_components/requirejs-promise/requirejs-promise'
  }
});

requirejs([
    'gameplay'
  ], function(
    GamePlay
  ) {
    var app = {
      // Application Constructor
      initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
      },

      // deviceready Event Handler
      //
      // Bind any cordova events here. Common events are:
      // 'pause', 'resume', etc.
      onDeviceReady: function() {
        this.receivedEvent('deviceready');
      },

      // Update DOM on a Received Event
      receivedEvent: function() {
        console.info('deviceready');
      }
    };

    app.initialize();

    GamePlay.startGame();
  });
