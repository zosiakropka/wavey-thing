define([
    'game',
    'sprites/player',
    'game-objects/obstacle-spawner',
    'spells',
    'jquery'
  ], function(
    Q,
    Player,
    ObstacleSpawner,
    Spells,
    $
  ) {
    var SCREEN_HEIGHT = $(window).height();
    var SCREEN_MIDDLE_Y = SCREEN_HEIGHT / 2
    var FLOOR_Y = SCREEN_HEIGHT * 0.8;

    Q.scene('main', function(stage){
      _insertBackgroundOnStage(stage);
      _insertObstacleSpawnerOnStage(stage);
      _insertPlayerOnStage(stage);
      _insertSpellButtonsOnStage(stage);
    });

    function _insertBackgroundOnStage(stage) {
      stage.insert(new Q.Repeater({
        asset: 'background-wall.png',
        speedX: 0.5
      }));

      stage.insert(new Q.Repeater({
        asset: 'background-floor.png',
        speedX: 1,
        y: FLOOR_Y
      }));
    }

    function _insertObstacleSpawnerOnStage(stage) {
      stage.insert(new ObstacleSpawner());
    }

    function _insertPlayerOnStage(stage) {
      var player = stage.insert(new Player({
        x: 10,
        y: 0
      }));

      stage
        .add('viewport')
        .follow(player);

      stage.viewport.offsetY = SCREEN_MIDDLE_Y - SCREEN_HEIGHT + FLOOR_Y;
    }

    function _insertSpellButtonsOnStage(stage) {
      console.info(Spells);
      Spells.renderSpellButtons();
    }
  });
