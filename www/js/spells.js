define([
    'jquery',
    'underscore',
    'mediator-js'
  ], function(
    $,
    _,
    mediator
  ) {
    var SPELL_IDS = [
      'kamien',
      'papier',
      'nozyce'
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

      var $button;

      $button = _get$spellButton(SPELL_IDS[0], BUTTON_POSITIONS.LEFT_TOP);
      $spellButtons.append($button);

      $button = _get$spellButton(SPELL_IDS[1], BUTTON_POSITIONS.LEFT_BOTTOM);
      $spellButtons.append($button);

      $button = _get$spellButton(SPELL_IDS[2], BUTTON_POSITIONS.RIGHT_TOP);
      $spellButtons.append($button);
    }

    function _get$spellButton(spellId, buttonPosition) {
      var $button = $('<div>');
      $button.addClass('spell-buttons__button--' + buttonPosition);
      $button.attr('data-button-id', spellId);
      $button.click(function() {
        mediator.publish('spell:cast', spellId)
        console.info('button clicked', spellId);
      });
      return $button;
    }

    return {
      renderSpellButtons: renderSpellButtons
    };
  });
