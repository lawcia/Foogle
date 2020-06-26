import React from "react";
import SignupPage from "./SignupPage";
import { shallow } from "enzyme";

describe("<SignupPage />", () => {
  it("should contain <Signup /> component", () => {
    const wrapper = shallow(<SignupPage />)
    expect(wrapper.find(Signup).length).toEqual(1);
  })
})