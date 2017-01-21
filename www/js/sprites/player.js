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
          var obstacles = Q('Obstacle');
          obstacles.first().destroy();
        })
      },

      step: function() {
        // this.p.vx += 1000;
      }

    });

    return Q.Player;
  });
