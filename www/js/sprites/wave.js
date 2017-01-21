define([
    'game'
  ], function(
    Q
  ){
    var WAVE_DISTANCE = 500;
    var WAVE_FACTOR = 0.7;

    Q.Sprite.extend("Wave", {
      init: function() {

        var player = Q("Player").first();
        this._super({
          x: player.p.x - 500,
          y: player.p.y,
          vx: 900,
          gravity: 0,
          age: 0,
          frame: 0,
          scale: 1,
          sheet: "wave"
        });

        this.add('2d');

        this.on("hit");
      },

      step: function(dt) {
        this.p.age += dt;

        var player = Q("Player").first();
        this.p.vx += (player.p.x - this.p.x - WAVE_DISTANCE) * WAVE_FACTOR;
        this.p.vx = Math.max(this.p.vx, 500);
      },

      hit: function() {
        console.log('you die!')
      }

    });

    return Q.Wave;
});