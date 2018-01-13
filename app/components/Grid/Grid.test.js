/**
 * Tests for Grid
 */

import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import Grid from './';
import { getData } from '../../../internals/utils';
let data = getData('Grid');

describe('<Grid />', () => {
    it('Renders an empty Grid', () => {
        const wrapper = mount(<Grid />);
        expect(wrapper.find(Grid)).to.have.length(1);
    });

    it('Renders Grid with data', () => {
        const wrapper = mount(<Grid {...data} />);
        expect(wrapper.find(Grid)).to.have.length(1);
    });
});
