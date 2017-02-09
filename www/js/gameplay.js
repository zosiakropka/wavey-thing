define([
    'require-promise!game',
    'scenes/start'
  ], function(
    Q
  ) {
    function startGame() {

      Q.stageScene('start');
    }

    return {
      startGame: startGame
    };
  })
