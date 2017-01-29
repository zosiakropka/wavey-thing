define([
    'require-promise!game',
    'scenes/main'
  ], function(
    Q
  ) {
    Q.scene('start', function(stage) {
      _renderPlayOnStage(stage);
    });

    function _renderPlayOnStage(stage) {
      var playAgainContainer = stage.insert(new Q.UI.Container({
        y: Q.height / 2,
        x: Q.width / 2
      }));

      stage.insert(new Q.UI.Button({
        asset: 'play-now.png',
        x: 0,
        y: 0
      }, function() {
        Q.stageScene('main');
      }), playAgainContainer);
    }
  });
