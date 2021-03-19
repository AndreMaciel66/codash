import React from 'react';
import { IconButton, Tooltip } from '@material-ui/core';
// import { withStyles } from '@material-ui/core/styles';

// const LightTooltip = withStyles((theme) => ({
//     tooltip: {
//       backgroundColor: theme.palette.common.white,
//       color: 'rgba(0, 0, 0, 0.87)',
//       boxShadow: theme.shadows[1],
//       fontSize: 11,
//     },
//   }))(Tooltip);

const DashboardIconButton = (props) => {
    return (
        <Tooltip title={props.link.title}>
            <IconButton color="primary" component="span">
                {props.link.iconButton}
            </IconButton>
        </Tooltip>
    );
}

export default DashboardIconButton;