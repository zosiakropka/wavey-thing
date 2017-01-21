define([
    'require-promise!game'
  ], function(
    Q
  ){
    Q.Sprite.extend("Obstacle", {
      init: function() {

        var player = Q("Player").first();
        this._super({
          x: player.p.x + Q.width + 50,
          y: player.p.y,
          frame: 0,
          scale: 1,
          sheet: "brambles"
        });

        this.on("hit");
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
