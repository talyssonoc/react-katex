import React from 'react';
import createMathComponent from './createMathComponent';

const InlineMath = ({ html }) => {
  return <span dangerouslySetInnerHTML={{__html: html}} />;
};

InlineMath.propTypes = {
  html: React.PropTypes.string.isRequired
};

export default createMathComponent(InlineMath, { displayMode: false });
