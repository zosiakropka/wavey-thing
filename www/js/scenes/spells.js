define([
    'require-promise!game',
    'buttons/spell-fire',
    'buttons/spell-fist',
    'buttons/spell-ice',
    'underscore'
  ], function(
    Q,
    FireSpell,
    FistSpell,
    IceSpell,
    _
  ) {
    var POSITIONS = [
      {
        x: Q.width - 250 / 2 - 250/4,
        y: 250 / 2 + 250/4
      },
      {
        x: 250 / 2 + 250/4,
        y: Q.height - 250 / 2 - 250 - 250/2
      },
      {
        x: 250 / 2 + 250/4,
        y: Q.height - 250 / 2 - 250/4
      }
    ];
    Q.scene('spells', function(stage) {
      var ice = stage.insert(new IceSpell({}));
      var fire = stage.insert(new FireSpell({}));
      var fist = stage.insert(new FistSpell({}));

      _shufflePositionsOnStage(stage);

      stage.on('spell.cast', function() {
        _shufflePositionsOnStage(stage);
      });
    });

    function _shufflePositionsOnStage(stage) {
      var positions = _(POSITIONS).shuffle();
      _(stage.items)
        .map(function(spell, index) {
          _(spell.p).extend(positions[index]);
        });
    }
  });
