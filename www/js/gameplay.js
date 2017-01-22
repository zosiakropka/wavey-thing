define([
    'require-promise!game',
    'mediator',
    'scenes/start'
  ], function(
    Q,
    mediator
  ) {
    function startGame() {
      Q.stageScene('start');
    }

    return {
      startGame: startGame
    };
  })
