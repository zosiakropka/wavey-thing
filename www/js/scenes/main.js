define([
    'game',
    'sprites/player'
  ], function(
    Q,
    Player
  ) {
    Q.scene('main', function(stage){
      var player = stage.insert(new Player());
      stage.add("viewport").follow(player);
    });
  });
