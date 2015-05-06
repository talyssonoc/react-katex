var path = '../dist/react-katex.js';

jest.dontMock(path);

var React = require('react/addons');
var katex = require('katex-build');

var ReactKaTeX = require(path);
var InlineMath = ReactKaTeX.InlineMath;

describe('ReactKaTeX#InlineMath', function() {

  it('render passing the formula as prop', function() {

    var formula = '\\sum_0^\\infty';

    var math = React.renderToStaticMarkup(
      <InlineMath math={ formula }/>
    );

    var expectedMath = '<span>' +
                          katex.renderToString(formula) +
                        '</span>';

    expect(math).toEqual(expectedMath);
  });

  it('render passing the formula as children', function() {

    var formula = '\\sum_0^\\infty';

    var math = React.renderToStaticMarkup(
      <InlineMath>{ formula }</InlineMath>
    );

    var expectedMath = '<span>' +
                          katex.renderToString(formula) +
                        '</span>';

    expect(math).toEqual(expectedMath);
  });

});
