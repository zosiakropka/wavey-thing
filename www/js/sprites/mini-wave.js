define([
    'require-promise!game'
  ], function(
    Q
  ){
    var WAVE_DELTA = 20; // half the amplitude of wave bouncing
    var WAVE_FREQ = 0.5; // 2 seconds for wave animation
    var WAVE_OFFSET = 0; // difference between wave motion and animation

    Q.Sprite.extend("MiniWave", {
      init: function(p) {

        var startingLocation = {
          x: p.x || 0,
          y: p.y || 0
        };

        this._super(p, {
          xBase: startingLocation.x,
          yBase: startingLocation.y,
          x: startingLocation.x,
          y: startingLocation.y,
          vx: 1000,
          type: 0,
          collisionMask: Q.SPRITE_NONE,
          age: 0, // usually overridden
          frame: 0,
          scale: 1,
          sheet: "mini-wave"
        });
      },

      step: function(dt) {
        this.p.age += dt;
        this.p.xBase += this.p.vx * dt;
        this.p.x = this.p.xBase + this.waveMotionX();
        this.p.y = this.p.yBase + this.waveMotionY();
      },

      // returns a distance within (-WAVE_DELTA, WAVE_DELTA)
      waveMotionX: function() {
        return Math.sin(this.p.age * 0.7 * 2 * Math.PI) * WAVE_DELTA;
      },
      waveMotionY: function() {
        return Math.sin(this.p.age * 0.3 * 2 * Math.PI) * WAVE_DELTA;
      }

    });

    return Q.MiniWave;
});
