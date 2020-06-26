import React from "react";
import Signup from "./Signup";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

describe("<Signup />", () => {
  it("should match snapshot", () => {
    const tree = renderer.create(<Signup 
    handleSubmit={jest.fn()}
    handleChange={jest.fn()}
    user={{username: '', email: '', password: '', password2: ''}}
    usernameError={null}
    emailError={null}
    />).toJSON();
    expect(tree).toMatchSnapshot();
  })
})