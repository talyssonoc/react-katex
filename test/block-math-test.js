var path = '../dist/react-katex.js';

jest.dontMock(path);

var React = require('react/addons');
var katex = require('katex-build');

var ReactKaTeX = require(path);
var BlockMath = ReactKaTeX.BlockMath;

describe('ReactKaTeX#BlockMath', function() {

  it('render passing the formula as prop', function() {

    var formula = '\\sum_0^\\infty';

    var math = React.renderToStaticMarkup(
      <BlockMath math={ formula }/>
    );

    var expectedMath = '<div>' +
                        katex.renderToString(formula, { displayMode: true }) +
                      '</div>';

    expect(math).toEqual(expectedMath);
  });

  it('render passing the formula as children', function() {

    var formula = '\\sum_0^\\infty';

    var math = React.renderToStaticMarkup(
      <BlockMath>{ formula }</BlockMath>
    );

    var expectedMath = '<div>' +
                          katex.renderToString(formula, { displayMode: true }) +
                        '</div>';

    expect(math).toEqual(expectedMath);
  });

});
