import React from "react";
import { shallow } from "enzyme";
import SearchLocationInput from "./SearchLocationInput";

describe("<Search Location Input />", () => {

  const features = [
        {
            "place_name": "London, Greater London, England, United Kingdom",
            "center": [
                -0.1275,
                51.50722
            ]
        },
        {
            "place_name": "London, Ontario, Canada",
            "center": [
                -81.246,
                42.9881
            ]
             },
        {
            "place_name": "Enfield, Greater London, England, United Kingdom",
            "center": [
                -0.06,
                51.645
            ],
         },
        {
            "place_name": "Londonderry, Derry, Northern Ireland, United Kingdom",
            "center": [
                -7.34167,
                54.99167
            ],
           }
    ];

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SearchLocationInput options={features} />)
  })

  it("should render an text input", () => {
    expect(wrapper.find("input[type='text']").length).toEqual(1);
  })

  it("should render 4 auto complete place name options in div", () => {
    expect(wrapper.find("#place-options").length).toEqual(1);
    expect(wrapper.find(".place-option").length).toEqual(4);
  })
})