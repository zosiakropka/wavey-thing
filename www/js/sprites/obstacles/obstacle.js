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
      defeated: {
        frames: [2, 2, 2], trigger: 'disappear',
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
        this.p.age += dt;

        if (this.p.x < -100) { this.destroy(); }
      },

      hit: function(options) {
        if (Q.stage(1)) { return; }
        if (this.p.defeated) { return; }

        this.p.type = Q.SPRITE_NONE;
        this.p.collisionMask = Q.SPRITE_NONE;

        this.stage.insert(new WaveSpawner({x: this.p.x}));
        Q.stageScene('gameover', 1);
      },

      defeated: function() {
        if (this.p.defeated) { return; }

        this.p.defeated = true;
        this.p.type = Q.SPRITE_NONE;
        this.p.collisionMask = Q.SPRITE_NONE;
        this.play('defeated');

        // hack below as unsetting collision doesn't work
        var self = this;
        setTimeout(function() {
          self.destroy();
        }, 75);
      },

      disappear: function() {
        this.destroy();
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
