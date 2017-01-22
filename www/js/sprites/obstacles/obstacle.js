define([
    'require-promise!game',
    'game-objects/wave-spawner',
    'scenes/gameover'
  ], function(
    Q,
    WaveSpawner
  ){
    Q.animations('obstacle', {
      threaten: {
        frames: [0, 1], rate: 1/3
      },
      harmless: {
        frames: [2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], rate: 0.2
      }
    });

    Q.Sprite.extend('Obstacle', {
      init: function(p) {
        var player = Q("Player").first();
        this._super(p, {
          x: player.p.x + Q.width + 50,
          sprite: 'obstacle',
          y: 0,
          obstacle: true,
          maxAge: 4,
          frame: 0,
          scale: 1,
          type: Q.SPRITE_ENEMY,
          collisionMask: Q.SPRITE_FRIENDLY
        });

        this.on("hit");
        this.on('defeated');
        this.on('disappear');

        this.add('animation');
        this.play('threaten');
      },

      isSusceptibile: function(spell) {
        return _(this.p.susceptibilities)
          .contains(spell);
      },

      step: function(dt) {
        this.stage.collide(this);
        this.p.age += dt;

        if (this.p.age > this.p.maxAge) { this.destroy(); }
      },

      hit: function(options) {
        if (Q.stage(1)) { return; }
        if (!this.p.obstacle) { return; }

        this.p.type = Q.SPRITE_NONE;

        this.stage.insert(new WaveSpawner({x: this.p.x}));
        Q.stageScene('gameover', 1);
      },

      defeated: function() {
        this.p.obstacle = false;
        this.p.type = 0;
        this.play('harmless');
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
