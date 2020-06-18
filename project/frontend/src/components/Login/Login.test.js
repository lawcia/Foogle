import React from "react";
import { Login } from "./Login";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";

describe("<Login />", () => {
  it("should have div", () => {
    const wrapper = shallow(<Login error="" />);
    expect(wrapper.find("div.Login").length).toEqual(1);
  });

  it("should match default snapshot", () => {
    const tree = renderer
      .create(
        <Router>
          <Login error=""/>
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should match error snapshot", () => {
    const tree = renderer
      .create(
        <Router>
          <Login error="Something went wrong" />
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
