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
        'wave-sprite.png',
        'small-wave-sprite.png',
        'mini-wave-sprite.png',
        'background-floor.png',
        'background-wall.png',
        'obstacles/brambles.png',
        'obstacles/skulls.png',
        'obstacles/waterhole-sprite.png',
        'points.png',
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
        Q.sheet('brambles', 'obstacles/brambles.png', {
          tilew: 300,
          tileh: 400
        });
        Q.sheet('skulls', 'obstacles/skulls.png', {
          tilew: 300,
          tileh: 400
        });
        Q.sheet('waterhole', 'obstacles/waterhole-sprite.png', {
          tilew: 400,
          tileh: 600
        });
        Q.sheet('wave', 'wave-sprite.png', {
          tilew: 5917/6,
          tileh: 1000
        });
        Q.sheet('small-wave', 'small-wave-sprite.png', {
          tilew: 700,
          tileh: 400
        });
        Q.sheet('mini-wave', 'mini-wave-sprite.png', {
          tilew: 400,
          tileh: 400
        });

        deferred.resolve(Q);

        Q.audio.play('pmme_magic_metal.mp3', {loop: true});
      });

    return deferred.promise();
  });
