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

var InlineMath = React.createClass({
  mixins: [PureRenderMixin, MathMixin],

  displayMode: false,

  render: function() {
    return (
      <span ref="math"></span>
    );
  }
});

var BlockMath = React.createClass({
  mixins: [PureRenderMixin, MathMixin],

  displayMode: true,

  render: function() {
    return (
      <div ref="math"></div>
    );
  }
});

ReactKaTeX.InlineMath = InlineMath;
ReactKaTeX.BlockMath = BlockMath;
