define([
    'game',
    'sprites/player'
  ], function(
    Q,
    Player
  ) {
    Q.scene('main', function(stage){
      stage.insert(new Q.Repeater({
        asset: 'background-wall.png',
        speedX: 0.5
      }));

      stage.insert(new Q.Repeater({
        asset: 'background-floor.png',
        speedX: 1,
        y: 600
      }));

      var player = stage.insert(new Player({
        x: 10,
        y: 20
      }));
      stage.add('viewport').follow(player);
    });
  });
