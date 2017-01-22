define([
    'require-promise!game'
  ], function(
    Q
  ){
    Q.Sprite.extend("SpellEffect", {
      init: function(p) {

        this._super(p, {
          vx: 1500,
          type: 0,
          collisionMask: Q.SPRITE_NONE,
          age: 0,
          maxAge: 1,
          frame: 0,
          scale: 1
        });
      },

      step: function(dt) {
        this.p.age += dt;
        this.p.x += this.p.vx * dt;
        this.p.frame = Math.floor(this.p.age * 2) % 2;
        if (this.p.age > this.p.maxAge) { this.destroy(); }
      }

    });

    return Q.SpellEffect;
});
