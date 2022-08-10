import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import KaTeX from 'katex';

const createMathComponent = (Component, { displayMode }) => {
  const MathComponent = ({ children, errorColor, math, renderError }) => {
    const formula = math ?? children;

    const { html, error } = useMemo(() => {
      try {
        const html = KaTeX.renderToString(formula, {
          displayMode,
          errorColor,
          throwOnError: !!renderError,
        });

        return { html, error: undefined };
      } catch (error) {
        if (error instanceof KaTeX.ParseError || error instanceof TypeError) {
          return { error };
        }

        throw error;
      }
    }, [formula, errorColor, renderError]);

    if (error) {
      return renderError ? renderError(error) : <Component html={`${error.message}`} />;
    }

    return <Component html={html} />;
  };

  MathComponent.propTypes = {
    children: PropTypes.string,
    errorColor: PropTypes.string,
    math: PropTypes.string,
    renderError: PropTypes.func,
  };

  return MathComponent;
};

export default createMathComponent;
