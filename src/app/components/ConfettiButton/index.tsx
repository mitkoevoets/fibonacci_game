import { faAirFreshener } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import JSConfetti from 'js-confetti';
import * as React from 'react';

export function ConfettiButton() {
  const jsConfetti = new JSConfetti();

  return (
    <a
      className="nav-link"
      role="button"
      id="clearCalculator"
      aria-haspopup="true"
      aria-expanded="false"
      onClick={() => jsConfetti.addConfetti()}
    >
      <FontAwesomeIcon icon={faAirFreshener} style={{ color: 'deeppink' }} />{' '}
      CONFETTI
    </a>
  );
}
