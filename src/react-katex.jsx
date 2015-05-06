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

var InlineMath = React.createClass({
  mixins: [PureRenderMixin, MathMixin],

  displayMode: false,

  render: function() {
    return (
      <span dangerouslySetInnerHTML={{__html: this.state.html}}></span>
    );
  }
});

var BlockMath = React.createClass({
  mixins: [PureRenderMixin, MathMixin],

  displayMode: true,

  render: function() {
    return (
      <div dangerouslySetInnerHTML={{__html: this.state.html}}></div>
    );
  }
});

ReactKaTeX.InlineMath = InlineMath;
ReactKaTeX.BlockMath = BlockMath;
