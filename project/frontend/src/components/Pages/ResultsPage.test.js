import React from 'react';
import ResultsPage from './ResultsPage';
import { shallow } from 'enzyme';
import axios from 'axios';

jest.mock('axios');

describe('<ResultsPage />', () => {
  it('should render a list of restaurants', () => {
    axios.get.mock
    const wrapper = shallow(<ResultsPage />);
    expect(wrapper.find('.Restaurant').length).toEqual(10);
  })
});