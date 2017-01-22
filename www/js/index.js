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
    GamePlay.startGame();
  });
