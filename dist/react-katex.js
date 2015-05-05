(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['react-with-addons', 'katex-build'], function(React, katex) {
    	return (root.ReactKaTeX = factory(React, katex));
    });
  } else if (typeof exports === 'object') {
    module.exports = factory(require('react/addons'), require('katex'));
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

  _renderMath: function _renderMath() {
    var math = this.props.math || this.props.children;

    katex.render(math, React.findDOMNode(this.refs.math), {
      displayMode: this.displayMode
    });
  },

  componentDidMount: function() {
    this._renderMath();
  },

  componentDidUpdate: function() {
    this._renderMath();
  }
};

var InlineMath = React.createClass({displayName: "InlineMath",
  mixins: [PureRenderMixin, MathMixin],

  displayMode: false,

  render: function() {
    return (
      React.createElement("span", {ref: "math"})
    );
  }
});

var BlockMath = React.createClass({displayName: "BlockMath",
  mixins: [PureRenderMixin, MathMixin],

  displayMode: true,

  render: function() {
    return (
      React.createElement("div", {ref: "math"})
    );
  }
});

ReactKaTeX.InlineMath = InlineMath;
ReactKaTeX.BlockMath = BlockMath;

return ReactKaTeX;
}));
