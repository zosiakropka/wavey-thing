define([
    'require-promise!game',
    'mediator'
  ], function(
    Q,
    mediator
  ){
    Q.UI.Button.extend('SpellButton', {
      init: function(p) {
        this._super(Q._defaults(p, {
          w: 250,
          h: 250
        }), function() {
          mediator.publish('spell:cast', this.p.effect);
          this.stage.trigger('spell.cast', this.p.effect);
        });

        this.fit(150, 150);
      }
    });

    return Q.SpellButton;
});
