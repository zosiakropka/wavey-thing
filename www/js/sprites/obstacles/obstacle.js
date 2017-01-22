define([
    'require-promise!game',
    'game-objects/wave-spawner',
    'scenes/gameover'
  ], function(
    Q,
    WaveSpawner
  ){
    Q.Sprite.extend('Obstacle', {
      init: function(p) {
        var player = Q("Player").first();
        this._super(p, {
          x: player.p.x + Q.width + 50,
          y: 0,
          frame: 0,
          scale: 1
        });

        this.on("hit");
      },

      isSusceptibile: function(spell) {
        return _(this.p.susceptibilities)
          .contains(spell);
      },

      step: function(dt) {
        this.p.age += dt;

        if (this.p.x < -100) { this.destroy(); }
      },

      hit: function() {
        this.p.type = 0;
        this.p.collisionMask = Q.SPRITE_NONE;

        if (!Q.stage(1)) {
          this.stage.insert(new WaveSpawner({x: this.p.x}));
          Q.stageScene('gameover', 1);
        }
      },

      spawnDeathWave: function() {
        this.stage.insert(new Q.Wave({
          xBase: this.p.x - 700,
          age: Math.random() * 2,
          maxAge: 6
        }));
      }
    });

    return Q.Obstacle;
});
