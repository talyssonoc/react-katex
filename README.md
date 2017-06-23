# react-katex

[![Build Status](https://travis-ci.org/talyssonoc/react-katex.svg?branch=master)](https://travis-ci.org/talyssonoc/react-katex) [![Code Climate](https://codeclimate.com/github/talyssonoc/react-katex/badges/gpa.svg)](https://codeclimate.com/github/talyssonoc/react-katex)

Display math with KaTeX and ReactJS!

## Installing

You can install it with npm:

```sh
  $ npm install --save react-katex
```

With Yarn:

```sh
  $ yarn add react-katex
```

Or use one of the files inside the `dist` folder.

__When using react-katex directly from the browser, react-katex will export a global called ReactKaTeX. Notice that the T and X from "KaTeX" are uppercased.__

__Don't forget to import KaTeX CSS file (see `example/index.html`)__.

__If you open the example file on Firefox directly (i.e. without a server) the fonts won't load, open it on Chrome or put it on some server. You can use some [static one-liner](https://gist.github.com/willurd/5720255).__

## Usage

`react-katex` has two types of math components, `InlineMath` and `BlockMath`.

### InlineMath

Display math in the middle of the text.

```jsx
  var InlineMath = ReactKaTeX.InlineMath;

  ReactDOM.render(<InlineMath math="\\int_0^\\infty x^2 dx"/>,
                document.getElementById('math'));

  // or

  ReactDOM.render(<InlineMath>\int_0^\infty x^2 dx</InlineMath>,
                document.getElementById('math'));
```

It will be rendered like this:

![Inline math](example/inline.png)

### BlockMath

Display math in a separated block, with larger font and symbols.

```jsx
  var BlockMath = ReactKaTeX.BlockMath;

  ReactDOM.render(<BlockMath math="\\int_0^\\infty x^2 dx"/>,
                document.getElementById('math'));

  // or

  ReactDOM.render(<BlockMath>\int_0^\infty x^2 dx</BlockMath>,
                document.getElementById('math'));
```

It will be rendered like this:

![Block math](example/block.png)


### Error handling

#### Basic

It's possible to handle parse errors using the prop `renderError`. This prop must be a function that receives the error object and returns what should be rendered when parsing fails:

```jsx
var BlockMath = ReactKaTeX.BlockMath;

ReactDOM.render(
  <BlockMath
    math="\\int_{"
    renderError={(error) => {
      return <b>Fail: {error.name}</b>
    }}
  />,
  document.getElementById('math'));

// The code above will render '<b>Fail: ParseError</b>' because it's the value returned from `renderError`.
```

#### Expanded

If you want your users to have a better indication of where the error occured, the following code sample will render everything before the error correctly and show the rest of the error as plain text:

```jsx
var handleError = function(error, input) {
  // everything before the error will be rendered correctly
  var beforeError = input.substring(0, error.position);
  // everything from the error onwards will be shown as red underlined, plain text
  var afterError = input.substring(error.position);
  var errorStyle = {
    textDecoration: 'dashed underline #cc1234'
  };
  // This is only necessary for BlockMath to ensure the formula before the error
  // and the plain text after the error are both centered horizontally. This can
  // be skipped when you're using InlineMath
  var centerBlockMathStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };
  return (
    <span style={centerBlockMathStyle}>
      <BlockMath
        math={beforeError}
        renderError={() => <span />} // render an empty span to prevent error output in the console
      />
      <span style={errorStyle}>
        {afterError}
      </span>
    </span>
  )
};

var badInput = '\\int_0^\\infty x^2 dx \\inta';

ReactDOM.render(
  <BlockMath
    math={badInput}
    renderError={(error) => handleError(error, badInput)}
  />, document.getElementById('math'));
```

This means that this faulty input `\\int_0^\\infty x^2 dx \\inta` will be rendered as 

![Bad input](example/error.png)
