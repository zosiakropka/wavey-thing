define([
    'game'
  ], function(
    Q
  ){
    Q.Sprite.extend("Player", {

      init: function(p) {

        // You can call the parent's constructor with this._super(..)
        this._super(p, {
          sheet: "peace",  // Setting a sprite sheet sets sprite width and height
          vx: 1000,
          gravity: 0
        });

        // Add in pre-made components to get up and running quickly
        this.add('2d');
      },

      step: function() {
        // this.p.vx += 1000;
      }

    });

    return Q.Player;
  });
