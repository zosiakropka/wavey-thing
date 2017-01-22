define([
    'require-promise!game',
    'sprites/spells/spell-effect',
    'mediator'
  ], function(
    Q,
    SpellEffect,
    mediator
  ){

    Q.animations('player', {
      surf_right: {
        frames: [0, 1], rate: 0.4
      },
      cast_right: {
        frames: [2, 2, 2, 2, 2, 2, 2], trigger: 'cast', rate: 1/30, next: 'surf_right'
      }
    });

    Q.Sprite.extend("Player", {

      init: function(p) {
        this._super(p, {
          sprite: 'player',
          sheet: "nekromanta",  // Setting a sprite sheet sets sprite width and height
          vx: 1000,
          score: 0,
          collisionMask: Q.SPRITE_ENEMY,
          type: Q.SPRITE_FRIENDLY
        });

        this.on('hit');
        this.add('animation');
        this.play('surf_right');
      },

      step: function(dt) {
        this.p.x += this.p.vx * dt;
      },

      hit: function(options) {
        if (options.obj.p.obstacle) {
          this.p.vx = 0;
        }
      },

      castSpell: function(spell) {
        this.play('cast_right', 1);
        this.spawnSpellEffect(spell);
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
      },

      spawnSpellEffect: function(spell) {

        this.stage.insert(new SpellEffect({
          x: this.p.x + 100,
          y: this.p.y,
          sheet: 'spell-' + spell
        }));
      }
    });

    return Q.Player;
  });
