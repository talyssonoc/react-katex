import React from 'react';
import createMathComponent from './createMathComponent';

const BlockMath = ({ html }) => {
  return <div dangerouslySetInnerHTML={{__html: html}} />;
};

BlockMath.propTypes = {
  html: React.PropTypes.string.isRequired
};

export default createMathComponent(BlockMath, { displayMode: true });
