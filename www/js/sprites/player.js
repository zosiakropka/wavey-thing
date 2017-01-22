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
      },

      castSpell: function(spell) {
        var obstacle = getFirstObstacle();
        if (obstacle && obstacle.isSusceptibile(spell)) {
          obstacle.destroy();
        }
        function getFirstObstacle() {
          return Q.stage().items.filter(isObstacle)[0];
        }
        function isObstacle(item) {
          return item && item.p && item.p.obstacle;
        }
      }
    });

    return Q.Player;
  });
