import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

export default function ArrowTooltips() {
  return (
    <Tooltip title="lsek;lsekvbnlk/ebv;lkdsrbv;okbkdp'vbldskfbvkp'dfsbk'vbds'klbc'kldn'lcnbds'pkbc'kdb'cbesd';ckb;" arrow placement="top">
        <FontAwesomeIcon icon={faQuestionCircle} style={{color: 'rgb(75, 137, 245)'}}/>
    </Tooltip>
  );
}