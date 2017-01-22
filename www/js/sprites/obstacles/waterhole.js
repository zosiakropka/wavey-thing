define([
    'game',
    'sprites/obstacles/obstacle'
  ], function(
    Q,
    Obstacle
  ){
    Obstacle.extend('Waterhole', {
      init: function() {
        this._super({
          y: 289,
          sheet: 'waterhole',
          susceptibilities: [
            'ice'
          ]
        });
      }
    });

    return Q.Waterhole;
});
