define([
    'require-promise!game',
    'sprites/wave'
  ], function(
    Q,
    Wave
  ){
    // This object spawns waves only after GameOver.
    Q.GameObject.extend('WaveSpawner', {
      init: function(p) {
        this.p = {
          x: p.x,
          launchDelay: 0.1,
          launchRandom: 0.4,
          launch: 0
        }
      },

      update: function(dt) {
        this.p.launch -= dt;

        if(this.p.launch < 0) {
          this.stage.insert(new Q.Wave({
            xBase: this.p.x - 1200,
            scale: 1.3,
            age: Math.random() * 2,
            maxAge: 6
          }));
          this.p.launch = this.p.launchDelay + this.p.launchRandom * Math.random();
        }
      }
    });

    return Q.WaveSpawner;

});
