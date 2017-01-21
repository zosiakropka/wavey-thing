define([
    'game',
    'sprites/player',
    'game-objects/obstacle-spawner',
    'jquery'
  ], function(
    Q,
    Player,
    ObstacleSpawner,
    $
  ) {
    var SCREEN_HEIGHT = $(window).height();
    var SCREEN_MEEDLE_Y = SCREEN_HEIGHT / 2
    var FLOOR_Y = SCREEN_HEIGHT * 0.8;

    Q.scene('main', function(stage){
      stage.insert(new Q.Repeater({
        asset: 'background-wall.png',
        speedX: 0.5
      }));

      stage.insert(new Q.Repeater({
        asset: 'background-floor.png',
        speedX: 1,
        y: FLOOR_Y
      }));

      stage.insert(new ObstacleSpawner());

      var player = stage.insert(new Player({
        x: 10,
        y: 0
      }));

      stage
        .add('viewport')
        .follow(player);

      stage.viewport.offsetY = SCREEN_MEEDLE_Y - SCREEN_HEIGHT + FLOOR_Y;
    });
  });
