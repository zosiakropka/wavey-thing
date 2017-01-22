define([
    'require-promise!game',
    'mediator'
  ], function(
    Q,
    mediator
  ){

    Q.animations('player', {
      surf_right: {
        frames: [0, 1], rate: 0.4
      },
      cast_right: {
        frames: [2], trigger: 'cast', rate: 1/30, next: 'surf_right'
      }
    });

    Q.Sprite.extend("Player", {

      init: function(p) {
        this._super(p, {
          sprite: 'player',
          sheet: "nekromanta",  // Setting a sprite sheet sets sprite width and height
          vx: 1000,
          gravity: 0,
          score: 0,
          collisionMask: Q.SPRITE_ENEMY,
          type: Q.SPRITE_FRIENDLY
        });

        this.add('2d, animation');
        this.play('surf_right');
      },

      castSpell: function(spell) {
        this.play('cast_right', 1);
        var obstacle = getFirstObstacle();
        if (obstacle && obstacle.isSusceptibile(spell)) {
          this.p.score += 1;
          obstacle.trigger('defeated');
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
