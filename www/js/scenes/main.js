define([
    'require-promise!game',
    'sprites/player',
    'sprites/wave',
    'sprites/small-wave',
    'sprites/mini-wave',
    'game-objects/obstacle-spawner',
    'spells',
    'underscore',
    'mediator'
  ], function(
    Q,
    Player,
    Wave,
    SmallWave,
    MiniWave,
    ObstacleSpawner,
    Spells,
    _,
    mediator
  ) {
    var SCREEN_HEIGHT = Q.height;
    var SCREEN_MIDDLE_Y = SCREEN_HEIGHT / 2
    var FLOOR_Y = SCREEN_HEIGHT - 189;

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
      stage.insert(new Wave({age: 0}));
      stage.insert(new Wave({age: 0.7}));
      stage.insert(new Wave({age: 1.6}));
      stage.insert(new SmallWave({age: 0}));
      stage.insert(new MiniWave({x: -250, y: -60, frame: 0, age: 0.2}));
      stage.insert(new MiniWave({x: -350, y: -20, frame: 2, age: 0.9}));
      stage.insert(new MiniWave({x: -150, y: -20, frame: 1, age: 0.5}));

      var player = stage.insert(new Player({
        x: 10,
        y: -100
      }));

      stage.insert(new Q.Repeater({
        asset: 'background-floor.png',
        speedX: 1,
        y: FLOOR_Y
      }));
      // stage.insert(new SmallWave({age: 0}));

      stage
        .add('viewport')
        .follow(player);

      stage.viewport.offsetY = 50;
      stage.viewport.offsetX = -220;

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
