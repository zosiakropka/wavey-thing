define([
    'require-promise!game',
    'underscore'
  ], function(
    Q,
    _
  ){
    Q.UI.Button.extend('SpellButton', {
      init: function(p) {
        this._super(Q._defaults(p, {
          w: 250,
          h: 250
        }), function() {
          var effect = this.p.effect;
          _(Q.stages).each(function(stage) {
            stage.trigger('spell.cast', effect);
          });
        });

        this.fit(150, 150);
      }
    });

    return Q.SpellButton;
});
