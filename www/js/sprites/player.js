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
          x: 10,           // You can also set additional properties that can
          y: 10            // be overridden on object creation
        });

        // Add in pre-made components to get up and running quickly
        this.add('2d, platformerControls');
      }

    });

    return Q.Player;
  });
