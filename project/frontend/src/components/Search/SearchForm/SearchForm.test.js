import React from "react";
import { shallow, mount } from "enzyme";
import { SearchForm } from "./SearchForm";
import { data } from "../../../mockAPIs/mapbox";

describe("<Search Form />", () => {

  it("Should render search location input", () => {
    const wrapper = shallow(<SearchForm />);
    expect(wrapper.find("SearchLocationInput").length).toEqual(1);
  })

  it("The value of textinput should match auto complete option when clicked", () => {
    const wrapper = mount(<SearchForm features={data.features} />);
    wrapper.find("input[name='searchLocation']").simulate("click");
    wrapper.update();
    expect(wrapper.find("input[name='searchLocation']").props().value).toEqual("");
    wrapper.find(".place-option").at(1).simulate("click");
    expect(wrapper.find("input[name='searchLocation']").props().value).toEqual("London, Ontario, Canada");
  })

  it("should display option to use current location", () => {
    const wrapper = mount(<SearchForm features={data.features} />);
    wrapper.find("input[name='searchLocation']").simulate("click");
    expect(wrapper.find(".current-location").text()).toEqual("Use current location");
  })

  
})