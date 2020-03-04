import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import title from '../PayForm/PayForm'

export default function ArrowTooltips() {
  return (
    <Tooltip title={title} arrow placement="top">
        <span><FontAwesomeIcon icon={faQuestionCircle} style={{color: 'rgb(105, 105, 106, .3)'}}/></span>
    </Tooltip>
  );
}