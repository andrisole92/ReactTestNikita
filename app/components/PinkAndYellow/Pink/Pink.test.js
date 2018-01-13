/**
 * Tests for Pink
 */

import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import Pink from './index';
import { getData } from '../../../../internals/utils/index';
let data = getData('Pink');

describe('<Pink />', () => {
    it('Renders an empty Pink', () => {
        const wrapper = mount(<Pink />);
        expect(wrapper.find(Pink)).to.have.length(1);
    });

    it('Renders Pink with data', () => {
        const wrapper = mount(<Pink {...data} />);
        expect(wrapper.find(Pink)).to.have.length(1);
    });
});
