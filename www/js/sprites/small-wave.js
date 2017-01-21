define([
    'require-promise!game'
  ], function(
    Q
  ){
    var WAVE_DELTA = 20; // half the amplitude of wave bouncing
    var WAVE_FREQ = 0.5; // 2 seconds for wave animation
    var WAVE_OFFSET = 1; // difference between wave motion and animation

    Q.Sprite.extend("SmallWave", {
      init: function(p) {

        var startingLocation = {
          x: 10,
          y: 30
        };

        this._super(p, {
          yBase: startingLocation.y,
          x: startingLocation.x,
          y: startingLocation.y,
          vx: 1000,
          // opacity: 0.8,
          type: 0,
          collisionMask: Q.SPRITE_NONE,
          age: 0, // usually overridden
          frame: 0,
          scale: 1,
          sheet: "small-wave"
        });
      },

      step: function(dt) {
        this.p.age += dt;
        this.p.x += this.p.vx * dt;
        this.p.y = this.p.yBase + this.waveMotionY();

        this.p.frame = Math.floor(this.p.age * 3 * WAVE_FREQ + WAVE_OFFSET) % 3;
      },

      // returns a distance within (-WAVE_DELTA, WAVE_DELTA)
      waveMotionY: function() {
        return Math.sin(this.p.age * WAVE_FREQ * 2 * Math.PI) * WAVE_DELTA;
      }

    });

    return Q.SmallWave;
});
