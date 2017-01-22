define([
    'game',
    'sprites/obstacles/obstacle'
  ], function(
    Q,
    Obstacle
  ){
    Obstacle.extend('Hole', {
      init: function() {
        this._super({
          y: 289,
          sheet: 'hole',
          susceptibilities: [
            'ice'
          ]
        });
      }
    });

    return Q.Hole;
});
