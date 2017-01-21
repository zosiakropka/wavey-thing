define([
    'jquery',
    'underscore',
    'mediator'
  ], function(
    $,
    _,
    mediator
  ) {
    var SPELL_IDS = [
      'feist',
      'fire',
      'ice'
    ];

    var BUTTON_POSITIONS = {
      LEFT_TOP: 'left-top',
      LEFT_BOTTOM: 'left-bottom',
      RIGHT_TOP: 'right-top'
    };

    function renderSpellButtons() {
      var $spellButtons = $('.spell-buttons');
      $spellButtons.find('.spell-buttons__button').off();
      $spellButtons.html('');
      $spellButtons.show();

      var $button;
      var shuffled_spell_ids = _(SPELL_IDS).shuffle();

      $button = _get$spellButton(shuffled_spell_ids[0], BUTTON_POSITIONS.LEFT_TOP);
      $spellButtons.append($button);

      $button = _get$spellButton(shuffled_spell_ids[1], BUTTON_POSITIONS.LEFT_BOTTOM);
      $spellButtons.append($button);

      $button = _get$spellButton(shuffled_spell_ids[2], BUTTON_POSITIONS.RIGHT_TOP);
      $spellButtons.append($button);
    }

    function _get$spellButton(spellId, buttonPosition) {
      var $button = $('<div>');
      $button.addClass('spell-buttons__button--' + buttonPosition);
      $button.attr('data-button-id', spellId);
      $button.click(function() {
        mediator.publish('spell:cast', spellId)
      });
      return $button;
    }

    mediator.subscribe('stage:scene', function(scene) {
      if (scene === 'main') {
        $('.spell-buttons').show();
      } else {
        $('.spell-buttons').hide();
      }

    });

    return {
      renderSpellButtons: renderSpellButtons
    };
  });
