import React from 'react';
import ResultsPage from './ResultsPage';
import { shallow } from 'enzyme';
import axios from 'axios';
import { data } from '../../mockAPIs/zomato';

jest.mock('axios');

describe('<ResultsPage />', () => {
  it('should render a list of restaurants', () => {
    axios.get.mockResolvedValueOnce({ data })
    const wrapper = shallow(<ResultsPage />);
    expect(wrapper.find('.Restaurant').length).toEqual(20);
  })
});