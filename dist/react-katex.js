(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['react-with-addons', 'katex-build'], function(React, katex) {
    	return (root.ReactKaTeX = factory(React, katex));
    });
  } else if (typeof exports === 'object') {
    module.exports = factory(require('react/addons'), require('katex-build'));
  } else {
    root.ReactKaTeX = factory(root.React, root.katex);
  }
}(this, function(React, katex) {
'use strict';
var ReactKaTeX = {};

var PureRenderMixin = React.addons.PureRenderMixin;

var MathMixin = {
  getDefaultProps: function() {
    return {
      math: false
    };
  },

  getInitialState: function() {
    return {
      html: this.generateHtml(this.props)
    };
  },

  componentWillUpdate: function(nextProps, nextState) {
    nextState.html = this.generateHtml(nextProps);
  },

  generateHtml: function(props) {
    return katex.renderToString(props.math || props.children, {
      displayMode: this.displayMode
    });
  }
};

var InlineMath = React.createClass({displayName: "InlineMath",
  mixins: [PureRenderMixin, MathMixin],

  displayMode: false,

  render: function() {
    return (
      React.createElement("span", {dangerouslySetInnerHTML: {__html: this.state.html}})
    );
  }
});

var BlockMath = React.createClass({displayName: "BlockMath",
  mixins: [PureRenderMixin, MathMixin],

  displayMode: true,

  render: function() {
    return (
      React.createElement("div", {dangerouslySetInnerHTML: {__html: this.state.html}})
    );
  }
});

ReactKaTeX.InlineMath = InlineMath;
ReactKaTeX.BlockMath = BlockMath;

return ReactKaTeX;
}));
