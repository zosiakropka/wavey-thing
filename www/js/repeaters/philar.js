define([
    'require-promise!game',
    'underscore'
  ], function(
    Q,
    _
  ){
    var STYLE_TO_ASSET = {
      base: 'background/philar.png',
      robust: 'background/philar-robust.png',
      blood: 'background/philar-blood.png',
      light: 'background/philar-light.png'
    };

    Q.Repeater.extend("Philar", {

      init: function(p) {
        var asset = STYLE_TO_ASSET[p && p.style] || STYLE_TO_ASSET.base;
        p = _({
          asset: asset,
          repeatY: false,
          y: - ((911) / 2),
          speedX: 0.5
        }).extend(p);

        this._super(p);
      }
    });

    return Q.Philar;
  });
