define([
    'require-promise!game',
    'buttons/spell-button'
  ], function(
    Q,
    SpellButton
  ){
    SpellButton.extend('IceButton', {
      init: function(p) {
        this._super(Q._defaults(p, {
          asset: 'ice.png',
          effect: 'ice'
        }));
      }
    });

    return Q.IceButton;
});
