import React from "react";
import { shallow, mount } from "enzyme";
import SearchForm from "./SearchForm";

describe("<Search Form />", () => {

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

  it("Should render search location input", () => {
    const wrapper = shallow(<SearchForm />);
    expect(wrapper.find("SearchLocationInput").length).toEqual(1);
  })

  it("The value of textinput should match auto complete option when clicked", () => {
    const wrapper = mount(<SearchForm features={features} />);
    wrapper.find(".place-option").at(1).simulate("click");
    expect(wrapper.find("input[name='searchLocation']").value).toEqual("London, Ontario, Canada");
  })

})