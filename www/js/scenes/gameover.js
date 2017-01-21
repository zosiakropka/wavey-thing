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
      var labelContainer = stage.insert(new Q.UI.Container({
        y: 50,
        x: Q.width / 2
      }));

      stage.insert(new Q.UI.Text({
        label: "YOU DiED",
        color: "black",
        x: 0,
        y: 0,
        size: 100,
      }), labelContainer);

      var buttonContainer = stage.insert(new Q.UI.Container({
        y: Q.height / 2,
        x: Q.width / 2
      }));

      stage.insert(new Q.UI.Button({
        asset: 'play-again.png',
        x: 0,
        y: 0
      }, function() {
        Q.stageScene('main');
        mediator.publish('stage:scene', 'main');
      }), buttonContainer);

      var gameoverContainer = stage.insert(new Q.UI.Container({
        y: Q.height - 200,
        x: Q.width / 2
      }));

      stage.insert(new Q.UI.Button({
        asset: 'logo/pmmestudio.jpg',
        x: Q.width / 3,
        y: 0
      }), gameoverContainer);
      stage.insert(new Q.UI.Button({
        asset: 'play-again.png',
        x: 0,
        y: 0
      }), gameoverContainer);
      stage.insert(new Q.UI.Button({
        asset: 'play-again.png',
        x: - Q.width / 3,
        y: 0
      }), gameoverContainer);
    });
  });
