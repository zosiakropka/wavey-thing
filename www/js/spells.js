define([
    'jquery',
    'underscore'
  ], function(
    $,
    _
  ) {
    var SPELL_BUTTON_IDS = [
      'kamien',
      'papier',
      'nozyce'
    ];

    var BUTTON_TYPES = {
      LEFT_TOP: 'left-top',
      LEFT_BOTTOM: 'left-bottom',
      RIGHT_TOP: 'right-top'
    };

    function renderSpellButtons() {
      var $spellButtons = $('.spell-buttons');
      $spellButtons.find('.spell-buttons__button').off();
      $spellButtons.html('');

      var $button;

      $button = _get$spellButton(SPELL_BUTTON_IDS[0], BUTTON_TYPES.LEFT_TOP);
      $spellButtons.append($button);

      $button = _get$spellButton(SPELL_BUTTON_IDS[1], BUTTON_TYPES.LEFT_BOTTOM);
      $spellButtons.append($button);

      $button = _get$spellButton(SPELL_BUTTON_IDS[2], BUTTON_TYPES.RIGHT_TOP);
      $spellButtons.append($button);
    }

    function _get$spellButton(buttonId, buttonPosition) {
      var $button = $('<div>');
      $button.addClass('spell-buttons__button--' + buttonPosition);
      $button.data('button-id', buttonId);
      $button.text('The button');
      $button.click(function() {
        console.info('button clicked', buttonId);
      });
      return $button;
    }

    return {
      renderSpellButtons: renderSpellButtons
    };
  });
