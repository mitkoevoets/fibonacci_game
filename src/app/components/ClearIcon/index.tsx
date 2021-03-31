import { faBan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { useStore } from "../../../store";

export function ClearIcon() {
  const { dispatch } = useStore();

  return (
    <a
      className="nav-link"
      role="button"
      id="clearCalculator"
      aria-haspopup="true"
      aria-expanded="false"
      onClick={() => dispatch({ type: 'CLEAR_GRID' })}
    >
      <FontAwesomeIcon icon={faBan} style={{ color: 'red' }} /> CLEAR GRID
    </a>
  );
}
