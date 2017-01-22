define([
    'require-promise!game',
    'sprites/obstacles/brambles',
    'sprites/obstacles/skulls',
    'sprites/obstacles/hole',
    'underscore'
  ], function(
    Q,
    Brambles,
    Skulls,
    Hole,
    _
  ){
    var OBSTACLE_CLASSES = [
      Q.Brambles,
      Q.Skulls,
      Q.Hole
    ];
    Q.GameObject.extend('ObstacleSpawner', {
      init: function() {
        this.p = {
          launchDelay: 0.75,
          launchRandom: 1,
          launch: 2
        }
      },

      update: function(dt) {
        this.p.launch -= dt;

        if(this.p.launch < 0) {
          var Obstacle = _(OBSTACLE_CLASSES).sample();
          this.stage.insert(new Obstacle());
          this.p.launch = this.p.launchDelay + this.p.launchRandom * Math.random();
        }
      }
    });

    return Q.ObstacleSpawner;

});
