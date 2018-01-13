/**
 * Tests for Column
 */

import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import Column from './';
import { getData } from '../../../../internals/utils';
let data = getData('Column');

describe('<Column />', () => {
    it('Renders an empty Column', () => {
        const wrapper = mount(<Column />);
        expect(wrapper.find(Column)).to.have.length(1);
    });

    it('Renders Column with data', () => {
        const wrapper = mount(<Column {...data} />);
        expect(wrapper.find(Column)).to.have.length(1);
    });
});
