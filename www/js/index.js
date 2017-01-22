requirejs.config({
  paths: {
    'components': '../bower_components',
    'underscore': '../bower_components/underscore/underscore',
    'jquery': '../bower_components/jquery/dist/jquery',
    'require-promise': '../bower_components/requirejs-promise/requirejs-promise'
  }
});

requirejs([
    'jquery',
    'gameplay'
  ], function(
    $,
    GamePlay
  ) {
    _scaleToFit();
    GamePlay.startGame();

    function _scaleToFit() {
      var GAME_WIDTH = 1920;
      var GAME_HEIGHT = 1080;
      var GAME_RATIO = GAME_WIDTH / GAME_HEIGHT;
      var width = $(window).width();
      var height = $(window).height();
      var ratio = width / height;

      var initialScale;

      if (ratio > GAME_RATIO) {
        initialScale = GAME_HEIGHT / height;
      } else {
        initialScale = GAME_WIDTH / width;
      }

      var viewport = $('meta[name="viewport"]');
      var settings = [
        'user-scalable=no, initial-scale=',
        initialScale,
        ', maximum-scale=',
        initialScale,
        ', minimum-scale=',
        initialScale,
        ', width=',
        GAME_WIDTH
      ].join('');
      viewport.prop('content', settings)
    }
  });
