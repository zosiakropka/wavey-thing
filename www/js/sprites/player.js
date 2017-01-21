define([
    'game',
    'mediator'
  ], function(
    Q,
    mediator
  ){
    Q.Sprite.extend("Player", {

      init: function(p) {
        this._super(p, {
          sheet: "nekromanta",  // Setting a sprite sheet sets sprite width and height
          vx: 1000,
          gravity: 0
        });

        this.add('2d');

        mediator.on('spell:cast', function() {
          var obstacle = Q('Obstacle').first();
          if (!obstacle) { return; }

          obstacle.destroy();
        })
      },

      step: function() {
        // this.p.vx += 1000;
      }

    });

    return Q.Player;
  });
