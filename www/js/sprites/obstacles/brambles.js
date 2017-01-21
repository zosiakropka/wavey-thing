define([
    'game',
    'sprites/obstacles/obstacle'
  ], function(
    Q,
    Obstacle
  ){
    Obstacle.extend('Brambles', {
      init: function() {
        this._super({
          sheet: 'brambles'
        });
      }
    });

    return Q.Brambles;
});
