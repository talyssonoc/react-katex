(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('prop-types'), require('katex')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'prop-types', 'katex'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ReactKaTeX = {}, global.React, global.PropTypes, global.katex));
})(this, (function (exports, React, PropTypes, KaTeX) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
  var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
  var KaTeX__default = /*#__PURE__*/_interopDefaultLegacy(KaTeX);

  const createMathComponent = (Component, {
    displayMode
  }) => {
    class MathComponent extends React__default["default"].Component {
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
          return {
            html,
            error: undefined
          };
        } catch (error) {
          if (error instanceof KaTeX__default["default"].ParseError || error instanceof TypeError) {
            return {
              error
            };
          }

          throw error;
        }
      }

      generateHtml(props) {
        const {
          errorColor,
          renderError
        } = props;
        return KaTeX__default["default"].renderToString(props[this.usedProp], {
          displayMode,
          errorColor,
          throwOnError: !!renderError
        });
      }

      render() {
        const {
          error,
          html
        } = this.state;
        const {
          renderError
        } = this.props;

        if (error) {
          return renderError ? renderError(error) : /*#__PURE__*/React__default["default"].createElement(Component, {
            html: `${error.message}`
          });
        }

        return /*#__PURE__*/React__default["default"].createElement(Component, {
          html: html
        });
      }

    }

    MathComponent.propTypes = {
      children: PropTypes__default["default"].string,
      errorColor: PropTypes__default["default"].string,
      math: PropTypes__default["default"].string,
      renderError: PropTypes__default["default"].func
    };
    return MathComponent;
  };

  const InlineMath = ({
    html
  }) => {
    return /*#__PURE__*/React__default["default"].createElement("span", {
      "data-testid": "react-katex",
      dangerouslySetInnerHTML: {
        __html: html
      }
    });
  };

  InlineMath.propTypes = {
    html: PropTypes__default["default"].string.isRequired
  };
  var InlineMath$1 = createMathComponent(InlineMath, {
    displayMode: false
  });

  const BlockMath = ({
    html
  }) => {
    return /*#__PURE__*/React__default["default"].createElement("div", {
      "data-testid": "react-katex",
      dangerouslySetInnerHTML: {
        __html: html
      }
    });
  };

  BlockMath.propTypes = {
    html: PropTypes__default["default"].string.isRequired
  };
  var BlockMath$1 = createMathComponent(BlockMath, {
    displayMode: true
  });

  exports.BlockMath = BlockMath$1;
  exports.InlineMath = InlineMath$1;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
