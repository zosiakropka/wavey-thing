define([
    'require-promise!game'
  ], function(
    Q
  ){
    var WAVE_DISTANCE = 650; // average distance between player and wave
    var WAVE_DELTA = 300; // half the amplitude of wave bouncing
    var WAVE_FREQ = 0.5; // 2 seconds for wave animation
    var WAVE_OFFSET = 1; // difference between wave motion and animation

    Q.Sprite.extend("Wave", {
      init: function(p) {

        var startingLocation = {
          x: -WAVE_DISTANCE,
          y: -200
        };

        this._super(p, {
          xBase: startingLocation.x,
          x: startingLocation.x,
          y: startingLocation.y,
          vx: 1000,
          gravity: 0,
          type: 0,
          age: 0, // usually overridden
          maxAge: 0, // might cause autodestruction
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
        if (this.p.maxAge && (this.p.age > this.p.maxAge)) {
          this.destroy();
        }
      },

      // returns a distance within (-WAVE_DELTA, WAVE_DELTA)
      waveMotionX: function() {
        return Math.sin(this.p.age * WAVE_FREQ * 2 * Math.PI) * WAVE_DELTA;
      }

    });

    return Q.Wave;
});
