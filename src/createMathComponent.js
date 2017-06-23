import React from 'react';
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
      return KaTeX.renderToString(
        props[this.usedProp],
        { displayMode, throwOnError: false }
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
    children: React.PropTypes.string,
    math: React.PropTypes.string,
    renderError: React.PropTypes.func
  };

  return MathComponent;
};


export default createMathComponent;
