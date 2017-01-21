define([
    'require-promise!game',
    'mediator',
    'scenes/gameover'
  ], function(
    Q,
    mediator
  ){
    var WAVE_DISTANCE = 950; // average distance between player and wave
    var WAVE_DELTA = 300; // half the amplitude of wave bouncing
    var WAVE_FREQ = 0.5; // 2 seconds for wave animation
    var WAVE_OFFSET = 1; // difference between wave motion and animation

    Q.Sprite.extend("Wave", {
      init: function(p) {

        var startingLocation = {
          x: 10 - WAVE_DISTANCE,
          y: 0 - 200
        };

        this._super(p, {
          xBase: startingLocation.x,
          x: startingLocation.x,
          y: startingLocation.y,
          vx: 1000,
          gravity: 0,
          // opacity: 0.8,
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
      },

      hit: function() {
        if (this.p.type) {
          this.stage.insert(new Q.Wave({
            xBase: this.p.x - 700,
            age: Math.random() * 2,
            maxAge: 6
          }));
        }
        this.p.type = 0;
        this.p.collisionMask = Q.SPRITE_NONE;

        Q.stageScene('gameover', 1);
      }

    });

    return Q.Wave;
});
