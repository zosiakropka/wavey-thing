define(['game'], function(Q) {
  Q.scene('main', function(stage){
    var player = stage.insert(new Q.Player());
    stage.add("viewport").follow(player);
  });
});
