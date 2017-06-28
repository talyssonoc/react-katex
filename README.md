# react-katex

[![Build Status](https://travis-ci.org/talyssonoc/react-katex.svg?branch=master)](https://travis-ci.org/talyssonoc/react-katex) [![Code Climate](https://codeclimate.com/github/talyssonoc/react-katex/badges/gpa.svg)](https://codeclimate.com/github/talyssonoc/react-katex) [![Coverage Status](https://coveralls.io/repos/github/talyssonoc/react-katex/badge.svg?branch=master)](https://coveralls.io/github/talyssonoc/react-katex?branch=master)

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

#### Default error message

By default the error rendering is handled by KaTeX. You can optionally pass `errorColor` (defaults to `#cc0000`) as a prop:

```jsx
var BlockMath = ReactKaTeX.BlockMath;

ReactDOM.render(
  <BlockMath
    math={'\\int_0^\\infty x^2 dx \\inta'}
    errorColor={'#cc0000'}
  />, document.getElementById('math'));
```

This will be rendered like so:

![KaTeX error](example/error.png)

#### Custom error message

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

This will render `<b>Fail: ParseError</b>`:

![renderError](example/rendererror.png)

### Template Literals

It can be annoying to escape backslashes and `{ }` doesn't work as a child in react. This can be circumvented with the String.raw tag on a template literal when using ES6.

```jsx
ReactDOM.render(<BlockMath>{String.raw`\frac{\text{m}}{\text{s}^2`}</BlockMath>,
                document.getElementById('math'));
```

Backticks must be escaped with a backslash but would be passed to katex as \\`. A tag can be created to replace \\` with `

```jsx
const latex = (...a) => String.raw(...a).replace("\\`","`")
ReactDOM.render(<BlockMath>{latex`\``}</BlockMath>,
                document.getElementById('math'));
```

You can even do variable substitution

```jsx
const top = "m";
const bottom = "s";
ReactDOM.render(<BlockMath>{String.raw`\frac{\text{${top}}}{\text{${bottom}}^2`}</BlockMath>,
                document.getElementById('math'));
```
