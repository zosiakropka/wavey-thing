define([
    'require-promise!game',
    'sprites/player',
    'repeaters/philar',
    'sprites/wave',
    'sprites/small-wave',
    'sprites/mini-wave',
    'game-objects/obstacle-spawner',
    'scenes/spells',
    'underscore'
  ], function(
    Q,
    Player,
    Philar,
    Wave,
    SmallWave,
    MiniWave,
    ObstacleSpawner,
    SpellsStage,
    _
  ) {
    var SCREEN_HEIGHT = Q.height;
    var SCREEN_MIDDLE_Y = SCREEN_HEIGHT / 2
    var FLOOR_Y = SCREEN_HEIGHT - 189;

    Q.scene('main', function(stage){
      _insertBackgroundOnStage(stage);
      _insertPhilarsOnStage(stage);
      _insertObstacleSpawnerOnStage(stage);
      _insertPlayerOnStage(stage);
      _insertSpellButtons();
    });

    function _insertBackgroundOnStage(stage) {
      stage.insert(new Q.Repeater({
        asset: 'background-wall.png',
        speedX: 0.33
      }));

      // stage.insert(new Q.Repeater({
      //   asset: 'background-floor.png',
      //   speedX: 1,
      //   y: FLOOR_Y
      // }));
    }

    function _insertPhilarsOnStage(stage) {
      stage.insert(new Q.Philar({
        repeatW: 2500,
        style: 'base'
      }));

      stage.insert(new Q.Philar({
        repeatW: 1000,
        style: 'robust'
      }));
    }

    function _insertObstacleSpawnerOnStage(stage) {
      stage.insert(new ObstacleSpawner());
    }

    function _insertPlayerOnStage(stage) {
      var SPEED = 900;
      stage.insert(new Wave({vx: SPEED, age: 0}));
      stage.insert(new Wave({vx: SPEED, age: 0.7}));
      stage.insert(new Wave({vx: SPEED, age: 1.6}));
      stage.insert(new SmallWave({vx: SPEED, age: 0}));
      stage.insert(new MiniWave({vx: SPEED, x: -250, y: -60, frame: 0, age: 0.2}));
      stage.insert(new MiniWave({vx: SPEED, x: -350, y: -20, frame: 2, age: 0.9}));
      stage.insert(new MiniWave({vx: SPEED, x: -150, y: -20, frame: 1, age: 0.5}));
      var player = stage.insert(new Player({vx: SPEED,  x: 10, y: -100}));

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

      stage.on('spell.cast', function(spell) {
        player.castSpell(spell);
      });
    }

    function _insertSpellButtons() {
      Q.stageScene('spells', 1);
    }
  });
