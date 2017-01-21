define([
    'require-promise!game',
    'mediator',
    'scenes/gameover'
  ], function(
    Q,
    mediator
  ){
    var WAVE_DISTANCE = 700;
    var WAVE_FACTOR = 0.7;

    Q.Sprite.extend("Wave", {
      init: function() {

        var player = Q("Player").first();
        this._super({
          x: player.p.x - WAVE_DISTANCE,
          y: player.p.y,
          vx: 900,
          gravity: 0,
          age: 0,
          frame: 0,
          scale: 3,
          sheet: "wave"
        });

        this.add('2d');

        this.on("hit");
      },

      step: function(dt) {
        this.p.age += dt;

        this.p.frame = Math.floor(this.p.age * 3) % 6;

        var player = Q("Player").first();
        this.p.vx += (player.p.x - this.p.x - WAVE_DISTANCE) * WAVE_FACTOR;
        this.p.vx = Math.max(this.p.vx, 500);
      },

      hit: function() {
        Q.stageScene('gameover');
      }

    });

    return Q.Wave;
});
