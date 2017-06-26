import React from 'react';
import PropTypes from 'prop-types';
import KaTeX from 'katex';

const createMathComponent = (Component, { displayMode }) => {
  class MathComponent extends React.Component {
    constructor(props) {
      super(props);

      this.usedProp = props.math ? 'math' : 'children';

      this.state = this.createNewState(null, props);
    }

    componentWillReceiveProps() {
      this.setState(this.createNewState);
    }

    shouldComponentUpdate(nextProps) {
      return nextProps[this.usedProp] !== this.props[this.usedProp];
    }

    createNewState(prevState, props) {
      try {
        const html = this.generateHtml(props);

        return { html, error: undefined };
      } catch(error) {
        return { error, html: undefined };
      }
    }

    generateHtml(props) {
      const { errorColor, renderError } = props;

      return KaTeX.renderToString(
        props[this.usedProp],
        { displayMode, errorColor, throwOnError: !!renderError }
      );
    }

    render() {
      if(this.state.html) {
        return <Component html={this.state.html} />;
      }

      if(this.props.renderError) {
        return this.props.renderError(this.state.error);
      }

      throw this.state.error;
    }
  }

  MathComponent.propTypes = {
    children: PropTypes.string,
    errorColor: PropTypes.string,
    math: PropTypes.string,
    renderError: PropTypes.func
  };

  return MathComponent;
};


export default createMathComponent;
