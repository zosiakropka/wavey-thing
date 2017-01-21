define([
    'quintus-all',
    'jquery'
  ], function(
    Quintus,
    $
  ) {
    var deferred = $.Deferred()
    var Q = Quintus()
      .include("Sprites, Scenes, Input, 2D, Anim, Touch, UI")
      .setup({
        width: 1920,
        height: 1080,
        scaleToFit: true
      })
      .touch();

    Q.load([
        'nekromanta.png',
        'przeszkoda_kolce1.png',
        'przeszkoda_kolce2.png',
        'fala/fala_calosc.png',
        'background-floor.png',
        'background-wall.png',
        'play-again.png',
        'logo/pmmestudio.jpg'
      ],
      function() {
        console.log('loaded some assets!');
        Q.sheet('nekromanta', 'nekromanta.png', {
          tilew: 309,
          tileh: 354
        });
        Q.sheet('brambles', 'przeszkoda_kolce1.png', {
          tilew: 200,
          tileh: 300
        });
        Q.sheet('wave', 'fala/fala_calosc.png', {
          tilew: 1000/6,
          tileh: 169
        });

        deferred.resolve(Q);
      });

    return deferred.promise();
  });
