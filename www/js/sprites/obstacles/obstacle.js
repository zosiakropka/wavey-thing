define([
    'require-promise!game'
  ], function(
    Q
  ){
    Q.Sprite.extend('Obstacle', {
      init: function(p) {
        var player = Q("Player").first();
        this._super(p, {
          x: player.p.x + Q.width + 50,
          y: -40,
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

        if(this.p.x < -100) { this.destroy(); }
      },

      hit: function() {
        this.p.type = 0;
        // this.p.collisionMask = Q.SPRITE_NONE;
        this.p.vx = 0;
        this.p.vy = 0;
        this.p.opacity = 0.5;
      }
    });

    return Q.Obstacle;
});
