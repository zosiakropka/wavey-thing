define([
    'require-promise!game',
    'mediator',
    'scenes/gameover'
  ], function(
    Q,
    mediator
  ){
    var WAVE_DISTANCE = 700; // average distance between player and wave
    var WAVE_DELTA = 300; // half the amplitude of wave bouncing
    var WAVE_FREQ = 0.5; // 2 seconds for wave animation
    var WAVE_OFFSET = 1; // difference between wave motion and animation

    Q.Sprite.extend("Wave", {
      init: function(p) {

        var player = Q("Player").first();
        var startingLocation = {
          x: player.p.x - WAVE_DISTANCE,
          y: player.p.y - 200
        };

        this._super(p, {
          xBase: startingLocation.x,
          x: startingLocation.x,
          y: startingLocation.y,
          vx: 1000,
          gravity: 0,
          // opacity: 0.8,
          age: 0, // usually overridden
          frame: 0,
          scale: 1,
          sheet: "wave"
        });

        this.on("hit");
      },

      step: function(dt) {
        this.p.age += dt;
        this.p.xBase += this.p.vx * dt;
        this.p.x = this.p.xBase + this.waveMotionX();

        this.p.frame = Math.floor(this.p.age * 6 * WAVE_FREQ + WAVE_OFFSET) % 6;
      },

      // returns a distance within (-WAVE_DELTA, WAVE_DELTA)
      waveMotionX: function() {
        return Math.sin(this.p.age * WAVE_FREQ * 2 * Math.PI) * WAVE_DELTA;
      },

      hit: function() {
        Q.stageScene('gameover');
        this.p.type = 0;
        this.p.collisionMask = Q.SPRITE_NONE;
      }

    });

    return Q.Wave;
});
