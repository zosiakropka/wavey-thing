define([
    'require-promise!game',
    'sprites/player',
    'mediator'
  ], function(
    Q,
    Player,
    mediator
  ) {
    Q.scene('gameover', function(stage) {
      _renderHeaderOnStage(stage);
      _renderPlayAgainOnStage(stage);
      _renderCreditsOnStage(stage);
    });

    function _renderHeaderOnStage(stage) {
      var labelContainer = stage.insert(new Q.UI.Container({
        fill: 'rgba(180,0,0,0.5)',
        border: 5,
        w: 700,
        h: 200,
        y: 150,
        x: Q.width / 2
      }));

      stage.insert(new Q.UI.Text({
        label: "YOU DIED",
        color: "black",
        x: 0,
        y: -50,
        size: 100,
      }), labelContainer);
    }

    function _renderPlayAgainOnStage(stage) {
      var playAgainContainer = stage.insert(new Q.UI.Container({
        y: Q.height / 2,
        x: Q.width / 2
      }));

      stage.insert(new Q.UI.Button({
        asset: 'play-again.png',
        x: 0,
        y: 0
      }, function() {
        Q.clearStages();
        Q.stageScene('main');
      }), playAgainContainer);
    }

    function _renderCreditsOnStage(stage) {
      var creditsContainer = stage.insert(new Q.UI.Container({
        y: Q.height - 200,
        x: Q.width / 2
      }));

      stage.insert(new Q.UI.Button({
        asset: 'logo/pmmestudio.jpg',
        x: Q.width / 3,
        y: 0
      }), creditsContainer);
      stage.insert(new Q.UI.Button({
        fill: 'white',
        w: 200,
        h: 300,
        x: - Q.width / 3,
        y: 0,
      }), creditsContainer);
      stage.insert(new Q.UI.Button({
        asset: 'logo/pinkgreen.png',
        x: - Q.width / 3,
        y: 0,
        scale: 0.2
      }), creditsContainer);

      stage.on('postrender', function() {
        mediator.publish('stage:scene', 'gameover');
      });
    }
  });
