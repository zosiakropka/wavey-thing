define([
    'quintus-all'
  ], function(
  ) {
    var Q = Quintus()
      .include("Sprites, Scenes, Input, 2D, Anim, Touch, UI")
      .setup({
        maximize: true
      })
      .controls()
      .touch();

      Q.load(['peace.jpg', 'background-floor.png', 'background-wall.png'],
        function() {
          console.log('loaded some assets!');
          Q.sheet('peace', 'peace.jpg', {
            tilew: 200,
            tileh: 300
          });
          // Q.compileSheets("sprites.png","sprites.json");
          Q.stageScene("main");
        });

    return Q;
  })
