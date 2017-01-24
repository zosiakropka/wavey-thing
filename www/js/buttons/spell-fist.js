define([
    'require-promise!game',
    'buttons/spell-button'
  ], function(
    Q,
    SpellButton
  ){
    SpellButton.extend('FistButton', {
      init: function(p) {
        this._super(Q._defaults(p, {
          asset: 'fist.png',
          effect: 'fist'
        }));
      }
    });

    return Q.FistButton;
});
