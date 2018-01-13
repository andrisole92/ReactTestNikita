/**
 * Tests for White
 */

import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import White from './';
import { getData } from '../../../internals/utils';
let data = getData('White');

describe('<White />', () => {
    it('Renders an empty White', () => {
        const wrapper = mount(<White />);
        expect(wrapper.find(White)).to.have.length(1);
    });

    it('Renders White with data', () => {
        const wrapper = mount(<White {...data} />);
        expect(wrapper.find(White)).to.have.length(1);
    });
});
