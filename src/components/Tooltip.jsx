import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Fade, Tooltip as MuiTooltip } from '@material-ui/core';

const useStyles = makeStyles(
  (theme) => ({
    tooltip: {
      ...theme.typography.body2,
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.background.paper,
      boxShadow: `4px 4px 10px ${theme.shadows[1]}`,
      boxSizing: 'border-box',
      minHeight: 24,
      maxWidth: (props) => props.maxWidth,
      padding: theme.spacing(1, 2),
      display: 'flex',
      alignItems: 'center',
    },
    tooltipArrow: {
      minHeight: 40,
      minWidth: 72,
    },
    arrow: {
      color: theme.palette.background.paper,
    },
  }),
  { name: 'Tooltip' },
);

const Tooltip = ({ maxWidth, children, ...otherProps }) => {
  const classes = useStyles({
    maxWidth,
  });

  const fadeProps = {
    timeout: {
      enter: 150,
      exit: 75,
    },
  };

  return (
    <MuiTooltip classes={classes} TransitionComponent={Fade} TransitionProps={fadeProps} {...otherProps}>
      {children}
    </MuiTooltip>
  );
};

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  maxWidth: PropTypes.number,
};

Tooltip.defaultProps = {
  maxWidth: 480,
};

export { Tooltip };
