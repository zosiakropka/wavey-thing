define([
    'require-promise!game',
    'scenes/main'
  ], function(
    Q
  ) {
    function startGame() {
      Q.stageScene("main");
    }

    return {
      startGame: startGame
    };
  })
