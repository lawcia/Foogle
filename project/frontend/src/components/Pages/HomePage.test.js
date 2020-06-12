import React from "react";
import { shallow } from "enzyme";
import HomePage  from "./HomePage";

describe("<Home Page />", () => {

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<HomePage />);
  })
  it("should have divs", () => {
    expect(wrapper.find("div.home").length).toEqual(1);
    expect(wrapper.find("div.home-search__container").length).toEqual(1);
    expect(wrapper.find("div.home__image").length).toEqual(1);
  })

  it("should have title", () => {
    expect(wrapper.find("h1.home__label").text()).toEqual("Find somewhere to eat.");
  })
})
