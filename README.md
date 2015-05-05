# react-katex

Display math with KaTeX and ReactJS !

## Installation

You can install it with npm:

```sh
  $ npm install react-katex
```

With Bower:

```sh
  $ bower install react-katex
```

Or use one of the files inside the `dist` folder.

When using `react-katex`, don't forget to import KaTeX CSS file (see `example/index.html`).

__If you open the example file on Firefox directly (i.e. without a server) the fonts won't load, open it on Chrome or put it on some server, like [simplehttpserver](https://www.npmjs.com/package/simplehttpserver).__

## Usage

`react-katex` has two types of math components, `InlineMath` and `BlockMath`.

### InlineMath

Let's you display math in the middle of the text.

```jsx
  var InlineMath = ReactKaTeX.InlineMath;

  React.render(<InlineMath math="\\int_0^\\infty x^2 dx"/>,
                document.getElementById('math'));

  // or

  React.render(<InlineMath>\int_0^\infty x^2 dx</InlineMath>,
                document.getElementById('math'));
```

It will be rendered like this:

![Inline math](example/inline.png)

### BlockMath

Let's you display math in a separated block, with larger font and symbols.

```jsx
  var BlockMath = ReactKaTeX.BlockMath;

  React.render(<BlockMath math="\\int_0^\\infty x^2 dx"/>,
                document.getElementById('math'));

  // or

  React.render(<BlockMath>\int_0^\infty x^2 dx</BlockMath>,
                document.getElementById('math'));
```

It will be rendered like this:

![Block math](example/block.png)
