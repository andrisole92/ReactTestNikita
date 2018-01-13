/**
 * Tests for Main
 */

import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import Main from './';
import { getData } from '../../../internals/utils';
let data = getData('Main');

describe('<Main />', () => {
    it('Renders an empty Main', () => {
        const wrapper = mount(<Main />);
        expect(wrapper.find(Main)).to.have.length(1);
    });

    it('Renders Main with data', () => {
        const wrapper = mount(<Main {...data} />);
        expect(wrapper.find(Main)).to.have.length(1);
    });
});
