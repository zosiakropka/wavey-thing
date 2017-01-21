define([
    'require-promise!game',
    'mediator',
    'scenes/main'
  ], function(
    Q,
    mediator
  ) {
    function startGame() {
      Q.stageScene("main");
      mediator.publish('stage:scene', 'main');
    }

    return {
      startGame: startGame
    };
  })
