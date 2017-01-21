define([
    'game',
    'sprites/obstacles/obstacle'
  ], function(
    Q,
    Obstacle
  ){
    Obstacle.extend('Skulls', {
      init: function() {
        this._super({
          sheet: 'skulls'
        });
      }
    });

    return Q.Skulls;
});
