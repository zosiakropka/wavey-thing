define([
    'require-promise!game',
    'sprites/player',
    'sprites/wave',
    'sprites/small-wave',
    'game-objects/obstacle-spawner',
    'spells',
    'underscore',
    'mediator'
  ], function(
    Q,
    Player,
    Wave,
    SmallWave,
    ObstacleSpawner,
    Spells,
    _,
    mediator
  ) {
    var SCREEN_HEIGHT = Q.height;
    var SCREEN_MIDDLE_Y = SCREEN_HEIGHT / 2
    var FLOOR_Y = SCREEN_HEIGHT * 0.8;

    Q.scene('main', function(stage){
      _insertBackgroundOnStage(stage);
      _insertObstacleSpawnerOnStage(stage);
      _insertPlayerOnStage(stage);
      _insertSpellButtons();
    });

    function _insertBackgroundOnStage(stage) {
      stage.insert(new Q.Repeater({
        asset: 'background-wall.png',
        speedX: 0.5
      }));

      // stage.insert(new Q.Repeater({
      //   asset: 'background-floor.png',
      //   speedX: 1,
      //   y: FLOOR_Y
      // }));
    }

    function _insertObstacleSpawnerOnStage(stage) {
      stage.insert(new ObstacleSpawner());
    }

    function _insertPlayerOnStage(stage) {
      stage.insert(new SmallWave({age: 0}));

      var player = stage.insert(new Player({
        x: 10,
        y: 0
      }));

      stage.insert(new Wave({age: 0}));
      stage.insert(new Wave({age: 0.7}));
      stage.insert(new Wave({age: 1.6}));

      stage.insert(new Q.Repeater({
        asset: 'background-floor.png',
        speedX: 1,
        y: FLOOR_Y
      }));
      // stage.insert(new SmallWave({age: 0}));

      stage
        .add('viewport')
        .follow(player);

      stage.viewport.offsetY = SCREEN_MIDDLE_Y - SCREEN_HEIGHT + FLOOR_Y - (player.p.h / 2);

      stage.on('postrender', function() {
        mediator.publish('stage:scene', 'main');
      });
    }

    function _insertSpellButtons() {
      Spells.renderSpellButtons();

      mediator.subscribe('spell:cast', function() {
        Spells.renderSpellButtons();
      });
    }
  });
