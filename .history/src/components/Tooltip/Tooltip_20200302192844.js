import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';

export default function ArrowTooltips() {
  return (
    <Tooltip title="Add" arrow>
      <p>Arrow</p>
    </Tooltip>
  );
}