import React from 'react';
import { ResultsPage } from './ResultsPage';
import { shallow } from 'enzyme';
import { data } from '../../mockAPIs/zomato';
import Restaurant from '../Restaurant/Restaurant';


describe('<ResultsPage />', () => {
  it('should render a list of restaurants', () => {
    
    const wrapper = shallow(<ResultsPage restaurants={data.restaurants}
    loadRestaurants={jest.fn()} />);
    expect(wrapper.find(Restaurant).length).toEqual(20);
  })
});