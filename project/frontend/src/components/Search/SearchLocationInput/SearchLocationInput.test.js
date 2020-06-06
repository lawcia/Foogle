import React from "react";
import { shallow } from "enzyme";
import SearchLocationInput from "./SearchLocationInput";
import { data } from "../../../mockAPIs/mapbox";

describe("<Search Location Input />", () => {

  let wrapper;
  let handleChange = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<SearchLocationInput 
                      options={data.features} 
                      searchLocation=""
                      setSearchLocation={jest.fn()}
                      handleChange={handleChange}/>)
  })

  it("should render an text input", () => {
    expect(wrapper.find("input[type='text']").length).toEqual(1);
  })

  it("should render 4 auto complete place name options in div", () => {
    expect(wrapper.find("#place-options").length).toEqual(1);
    expect(wrapper.find(".place-option").length).toEqual(4);
    expect(wrapper.find(".place-option").at(0).props()).toHaveProperty("tabIndex", "0");
    expect(wrapper.find(".place-option").at(0).props()).toHaveProperty("role", "button")
    expect(wrapper.find(".place-option").at(0).props()).toHaveProperty("aria-pressed", "false")
  })

  it("should not render place-options div if features is empty", () => {
    let searchWrapper = shallow(<SearchLocationInput options={[]} />);
    expect(searchWrapper.find("#place-options").length).toEqual(0);
  })
  
  it("onchange of searchLocation input should call handle change", () => {
    const event = { target: { value: "London" }};
    expect(wrapper.find("input[name='searchLocation']").props().value).toEqual("");
    
    wrapper.find("input[name='searchLocation']").simulate("change", event)
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(event);
  })

  

})