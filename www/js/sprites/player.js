define([
    'require-promise!game',
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

        mediator.on('spell:cast', function(spell) {
          var obstacle = _getFirstObstacle();
          if (!obstacle || !obstacle.isSusceptibile(spell)) {
            return;
          }

          obstacle.destroy();
        })
      }
    });

    function _getFirstObstacle() {
      return _([
        'Brambles',
        'Skulls',
        'Waterhole'
      ]).chain()
        .map(function(className) {
          return Q(className).first()
        })
        .compact()
        .first()
        .value();
    }

    return Q.Player;
  });
