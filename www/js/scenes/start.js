define([
    'require-promise!game',
    'mediator',
    'scenes/main'
  ], function(
    Q,
    mediator
  ) {
    Q.scene('start', function(stage) {
      stage.on('postrender', function() {
        _renderPlayOnStage(stage);
        mediator.publish('stage:scene', 'start');
      });
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
