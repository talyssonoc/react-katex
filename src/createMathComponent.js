import React from 'react';
import KaTeX from 'katex';

const createMathComponent = (Component, { displayMode }) => {
  class MathComponent extends React.Component {
    constructor(props) {
      super(props);

      this.usedProp = props.math ? 'math' : 'children';

      this.state = {
        html: this.generateHtml(props)
      };
    }

    componentWillReceiveProps(nextProps) {
      this.setState({
        html: this.generateHtml(nextProps)
      });
    }

    shouldComponentUpdate(nextProps) {
      return nextProps[this.usedProp] !== this.props[this.usedProp];
    }

    generateHtml(props) {
      return KaTeX.renderToString(
        props[this.usedProp],
        { displayMode }
      );
    }

    render() {
      return <Component html={this.state.html} />;
    }
  }

  MathComponent.propTypes = {
    children: React.PropTypes.string,
    math: React.PropTypes.string
  };

  Object.defineProperty(MathComponent, 'name', {
    value: Component.name,
    configurable: true
  });

  return MathComponent;
};


export default createMathComponent;
