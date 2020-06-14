import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('<Button />', () => {
  it('should have value Search and className blue', () => {
    const wrapper = shallow(<Button value="Search" colour="blue"/>);
    expect(wrapper.text()).toEqual("Search");
    expect(wrapper.find('.blue').length).toEqual(1);
  })
})