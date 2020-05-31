import React from "react";
import { shallow } from "enzyme";
import SearchLocationInput from "./SearchLocationInput";

describe("<Search Location Input />", () => {

  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<SearchLocationInput />)
  })

  it("should render an text input", () => {
    expect(wrapper.find(input).length).toEqual(1);
  })
})