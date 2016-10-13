import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import KaTeX from 'katex';

export default (Component, { wrapperTag, displayMode }) => {
  const sumFormula = '\\sum_0^\\infty';
  const integralFormula = '\\int_{-infty}^\\infty';

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
};
