define([
    'require-promise!game',
    'sprites/obstacle'
  ], function(
    Q
  ){

    Q.GameObject.extend("ObstacleSpawner",{
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
          this.stage.insert(new Q.Obstacle());
          this.p.launch = this.p.launchDelay + this.p.launchRandom * Math.random();
        }
      }
    });

    return Q.ObstacleSpawner;

});
