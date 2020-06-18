import React from "react";
import { shallow } from "enzyme";
import SearchLocationInput from "./SearchLocationInput";
import { data } from "../../../mockAPIs/mapbox";

describe("<Search Location Input />", () => {

  let wrapper;
  let handleChange = jest.fn();
  let setShowDropdown = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<SearchLocationInput 
                      options={data.features} 
                      searchLocation=""
                      setSearchLocation={jest.fn()}
                      handleChange={handleChange}
                      setShowDropdown={setShowDropdown}
                      showDropdown={true}
                      />)
  })

  afterEach(() => {
    jest.clearAllMocks();
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

  it("should not render dropdown", () => {
    let searchWrapper = shallow(<SearchLocationInput 
      options={data.features} 
      searchLocation=""
      setSearchLocation={jest.fn()}
      handleChange={handleChange}
      setShowDropdown={jest.fn()}
      showDropdown={false}
      />)
    expect(searchWrapper.find("#place-options").length).toEqual(0);
    expect(searchWrapper.find(".place-option").length).toEqual(0);
  })

  it("should not render place-options div if features is empty", () => {
    let searchWrapper = shallow(<SearchLocationInput 
                                 options={[]}
                                 searchLocation=""
                                 setSearchLocation={jest.fn()}
                                 handleChange={handleChange}
                                 setShowDropdown={setShowDropdown}
                                 showDropdown={false} />);
    expect(searchWrapper.find("#place-options").length).toEqual(0);
  })
  
  it("onchange of searchLocation input should call handle change", () => {
    const event = { target: { value: "London" }};
    expect(wrapper.find("input[name='searchLocation']").props().value).toEqual("");
    wrapper.find("input[name='searchLocation']").simulate("change", event);
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(event);
  })

  it("should render caret up icon when dropdown is visible", () => {
    expect(wrapper.find(".fa-caret-up").length).toEqual(1);
    expect(wrapper.find(".fa-caret-down").length).toEqual(0);
    wrapper.find(".fa-caret-up").simulate("click");
    expect(setShowDropdown).toHaveBeenCalledTimes(1);
  })

  it("should render caret down icon when dropdown is not visible", () => {
    let searchWrapper = shallow(<SearchLocationInput 
      options={data.features} 
      searchLocation=""
      setSearchLocation={jest.fn()}
      handleChange={handleChange}
      setShowDropdown={setShowDropdown}
      showDropdown={false}
      />);
    expect(searchWrapper.find(".fa-caret-down").length).toEqual(1);
    expect(searchWrapper.find(".fa-caret-up").length).toEqual(0);
    searchWrapper.find(".fa-caret-down").simulate("click");
    expect(setShowDropdown).toHaveBeenCalledTimes(1);
  })

})