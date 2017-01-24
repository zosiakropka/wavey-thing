define([
    'require-promise!game',
    'buttons/spell-button'
  ], function(
    Q,
    SpellButton
  ){
    SpellButton.extend('FireButton', {
      init: function(p) {
        this._super(Q._defaults(p, {
          asset: 'fire.png',
          effect: 'fire'
        }));
      }
    });

    return Q.FireButton;
});
