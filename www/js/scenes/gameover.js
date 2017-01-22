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
      _renderScore(stage);
      _renderPlayAgainOnStage(stage);
      _renderCreditsOnStage(stage);
    });

    function _renderScore(stage) {
      var yourScore = Q.select('Player', 0).first().p.score;
      var scoreContainer = stage.insert(new Q.UI.Container({
        y: 100,
        x: Q.width / 2
      }));

      stage.insert(new Q.UI.Text({
        label: yourScore + '',
        color: 'white',
        shadow: 10,
        shadowColor: 'black',
        size: 150,
        x: 0,
        y: -30
      }), scoreContainer);
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
