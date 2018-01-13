/**
 * Tests for Blue
 */

import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import Blue from './';
import { getData } from '../../../internals/utils';
let data = getData('Blue');

describe('<Blue />', () => {
    it('Renders an empty Blue', () => {
        const wrapper = mount(<Blue />);
        expect(wrapper.find(Blue)).to.have.length(1);
    });

    it('Renders Blue with data', () => {
        const wrapper = mount(<Blue {...data} />);
        expect(wrapper.find(Blue)).to.have.length(1);
    });
});
