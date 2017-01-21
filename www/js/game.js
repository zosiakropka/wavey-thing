define([
    'quintus-all',
    'jquery'
  ], function(
    Quintus,
    $
  ) {
    var deferred = $.Deferred()
    var Q = Quintus()
      .include("Sprites, Scenes, Input, 2D, Anim, Touch, UI, Audio")
      .setup({
        width: 1920,
        height: 1080,
        scaleToFit: true
      })
      .touch()
      .enableSound();

    Q.load([
        'nekromanta.png',
        'przeszkoda_kolce1.png',
        'przeszkoda_kolce2.png',
        'fala/fala_calosc2.png',
        'fala_mala/fala_mala_2.png',
        'background-floor.png',
        'background-wall.png',
        'play-now.png',
        'play-again.png',
        'logo/pmmestudio.jpg',
        'logo/pinkgreen.png',
        'pmme_magic_metal.mp3'
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
        Q.sheet('wave', 'fala/fala_calosc2.png', {
          tilew: 5917/6,
          tileh: 1000
        });
        Q.sheet('small-wave', 'fala_mala/fala_mala_2.png', {
          tilew: 700,
          tileh: 400
        });

        deferred.resolve(Q);

        Q.audio.play('pmme_magic_metal.mp3', {loop: true});
      });

    return deferred.promise();
  });
