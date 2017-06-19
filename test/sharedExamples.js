import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import KaTeX from 'katex';

export default (Component, { wrapperTag, displayMode }) => {
  const sumFormula = '\\sum_0^\\infty';
  const integralFormula = '\\int_{-infty}^\\infty';
  const brokenFormula = '\\int_{';
  const renderError = (error) => (
    <span className={'error'}>{`${error.name}: Invalid formula ${brokenFormula}`}</span>
  );

  context('when passing the formula as props', () => {
    it('renders correctly', () => {
      const math = shallow(<Component math={sumFormula} />);

      expect(math.html()).to.equal(
        `<${wrapperTag}>${ KaTeX.renderToString(sumFormula, { displayMode }) }</${wrapperTag}>`
      );
    });

    it('updates after props are updated', () => {
      const math = shallow(<Component math={sumFormula} />);

      math.setProps({
        math: integralFormula
      });

      expect(math.html()).to.equal(
        `<${wrapperTag}>${ KaTeX.renderToString(integralFormula, { displayMode }) }</${wrapperTag}>`
      );
    });
  });

  context('when passing the formula as child', () => {
    it('renders correctly', () => {
      const math = shallow(<Component>{ integralFormula }</Component>);

      expect(math.html()).to.equal(
        `<${wrapperTag}>${ KaTeX.renderToString(integralFormula, { displayMode }) }</${wrapperTag}>`
      );
    });

    it('updates after props are updated', () => {
      const math = shallow(<Component>{ integralFormula }</Component>);

      math.setProps({
        children: sumFormula
      });

      expect(math.html()).to.equal(
        `<${wrapperTag}>${ KaTeX.renderToString(sumFormula, { displayMode }) }</${wrapperTag}>`
      );

    });
  });

  describe('error handling', () => {
    it('renders the returned value from `renderError` prop when formula is invalid', () => {
      const math = shallow(
        <Component
          math={brokenFormula}
          renderError={renderError}
        />
      );

      expect(math.html()).to.equal(
        '<span class="error">ParseError: Invalid formula \\int_{</span>'
      );
    });

    it('updates when passing from invalid to valid formula', () => {
      const math = shallow(
        <Component
          math={brokenFormula}
          renderError={renderError}
        />
      );

      math.setProps({
        math: integralFormula
      });

      expect(math.html()).to.equal(
        `<${wrapperTag}>${ KaTeX.renderToString(integralFormula, { displayMode }) }</${wrapperTag}>`
      );
    });

    it('updates when passing from valid to invalid formula', () => {
      const math = shallow(
        <Component
          math={integralFormula}
          renderError={renderError}
        />
      );

      math.setProps({
        math: brokenFormula
      });

      expect(math.html()).to.equal(
        '<span class="error">ParseError: Invalid formula \\int_{</span>'
      );
    });

    it('blows when no `renderError` prop is passed', () => {
      expect(() => {
        shallow(<Component math={brokenFormula} />);
      }).to.throw('KaTeX parse error');
    });
  });
};
