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

const InternalBlockMath = ({ html }) => {
  return <div data-testid="react-katex" dangerouslySetInnerHTML={{ __html: html }} />;
};

InternalBlockMath.propTypes = {
  html: PropTypes.string.isRequired,
};

const InternalInlineMath = ({ html }) => {
  return <span data-testid="react-katex" dangerouslySetInnerHTML={{ __html: html }} />;
};

InternalInlineMath.propTypes = {
  html: PropTypes.string.isRequired,
};

export const BlockMath = createMathComponent(InternalBlockMath, { displayMode: true });
export const InlineMath = createMathComponent(InternalInlineMath, { displayMode: false });
