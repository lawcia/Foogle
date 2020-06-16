import React from 'react';
import Login from './Login';
import { shallow } from 'enzyme';

describe('<Login />', () => {

  it('should have div', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('div.Login').length).toEqual(1);
  })
})