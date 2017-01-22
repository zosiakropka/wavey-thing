define([
    'require-promise!game',
    'mediator',
    'sprites/intro_video',
    'scenes/start'
  ], function(
    Q,
    mediator
  ) {
    Q.scene('intro', function(stage) {
      stage.insert(new Q.IntroVideo({
        x: Q.width / 2,
        y: Q.height / 2
      }));

      stage.on('postrender', function() {
        mediator.publish('stage:scene', 'intro');
      });
    });
  });
