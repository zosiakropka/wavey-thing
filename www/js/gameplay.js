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
    }

    return {
      startGame: startGame
    };
  })
