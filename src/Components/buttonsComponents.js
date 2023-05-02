import React from 'react';
import PropTypes from 'prop-types';

const Buttons = ({ value, className }) => (
  <button type="button" className={className}>
    {value}
  </button>
);

Buttons.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Buttons;
