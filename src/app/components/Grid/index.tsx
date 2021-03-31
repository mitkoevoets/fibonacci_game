import * as React from 'react';
import { useStore } from "../../../store";
import { ClearIcon } from "../ClearIcon"

export function Grid(props) {
  const { state, dispatch } = useStore();
  console.log(state)

  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="font-weight-bold text-primary">TEXT</h6>
        <ClearIcon />
      </div>
      <div className="card-body">

      </div>
    </div>
  );
}
