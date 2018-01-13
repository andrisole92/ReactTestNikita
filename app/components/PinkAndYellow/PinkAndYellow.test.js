/**
 * Tests for PinkAndYellow
 */

import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import PinkAndYellow from './';
import { getData } from '../../../internals/utils';
let data = getData('PinkAndYellow');

describe('<PinkAndYellow />', () => {
    it('Renders an empty PinkAndYellow', () => {
        const wrapper = mount(<PinkAndYellow />);
        expect(wrapper.find(PinkAndYellow)).to.have.length(1);
    });

    it('Renders PinkAndYellow with data', () => {
        const wrapper = mount(<PinkAndYellow {...data} />);
        expect(wrapper.find(PinkAndYellow)).to.have.length(1);
    });
});
