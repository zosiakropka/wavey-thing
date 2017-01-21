define([
    'quintus-all'
  ], function(
    Quintus
  ) {
    var Q = Quintus()
      .include("Sprites, Scenes, Input, 2D, Anim, Touch, UI")
      .setup({
        width: 1920,
        height: 1080,
        scaleToFit: true
      })
      .touch();

      Q.load([
          'peace.jpg',
          'przeszkoda_kolce1.png',
          'przeszkoda_kolce2.png',
          'background-floor.png',
          'background-wall.png'
        ],
        function() {
          console.log('loaded some assets!');
          Q.sheet('peace', 'peace.jpg', {
            tilew: 200,
            tileh: 300
          });
          Q.sheet('brambles', 'przeszkoda_kolce1.png', {
            tilew: 200,
            tileh: 300
          });
          Q.sheet('wave', 'przeszkoda_kolce2.png', {
            tilew: 200,
            tileh: 300
          });
          // Q.compileSheets("sprites.png","sprites.json");
          Q.stageScene("main");
        });

    return Q;
  })
