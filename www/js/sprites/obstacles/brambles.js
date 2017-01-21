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
          sheet: 'brambles',
          susceptibilities: [
            'fire'
          ]
        });
      }
    });

    return Q.Brambles;
});
