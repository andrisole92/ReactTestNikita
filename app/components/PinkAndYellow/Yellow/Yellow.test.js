/**
 * Tests for Yellow
 */

import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import Yellow from './index';
import { getData } from '../../../../internals/utils/index';
let data = getData('Yellow');

describe('<Yellow />', () => {
    it('Renders an empty Yellow', () => {
        const wrapper = mount(<Yellow />);
        expect(wrapper.find(Yellow)).to.have.length(1);
    });

    it('Renders Yellow with data', () => {
        const wrapper = mount(<Yellow {...data} />);
        expect(wrapper.find(Yellow)).to.have.length(1);
    });
});
