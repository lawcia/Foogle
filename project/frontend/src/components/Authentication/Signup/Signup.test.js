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
    passwordError={null}
    />).toJSON();
    expect(tree).toMatchSnapshot();
  })

  it("should show username error message", () => {
    const message = "this username has been taken";
    const wrapper = shallow(<Signup
                             handleSubmit={jest.fn()}
                             handleChange={jest.fn()}
                             user={{username: '', email: '', password: '', password2: ''}}
                             usernameError={{message: message}}
                             emailError={null}
                             passwordError={null}
                            />);
    expect(wrapper.find(".Signup___text--error").length).toEqual(1);
    expect(wrapper.find(".Signup___text--error").text()).toEqual(message);
    expect(wrapper.find("input.Signup__input--error").length).toEqual(1);
  })
  it("should show email error message", () => {
    const message = "this email has been taken";
    const wrapper = shallow(<Signup
                             handleSubmit={jest.fn()}
                             handleChange={jest.fn()}
                             user={{username: '', email: '', password: '', password2: ''}}
                             usernameError={null}
                             emailError={{message: message}}
                             passwordError={null}
                            />);
    expect(wrapper.find(".Signup___text--error").length).toEqual(1);
    expect(wrapper.find(".Signup___text--error").text()).toEqual(message);
    expect(wrapper.find("input.Signup__input--error").length).toEqual(1);
  })

  it("should show email error message", () => {
    const message = "this password is too short";
    const wrapper = shallow(<Signup
                             handleSubmit={jest.fn()}
                             handleChange={jest.fn()}
                             user={{username: '', email: '', password: '', password2: ''}}
                             usernameError={null}
                             emailError={null}
                             passwordError={{message: message}}
                            />);
    expect(wrapper.find(".Signup___text--error").length).toEqual(1);
    expect(wrapper.find(".Signup___text--error").text()).toEqual(message);
    expect(wrapper.find("input.Signup__input--error").length).toEqual(1);
  })

  it("should not have error messages", () => {
    const wrapper = shallow(<Signup
                             handleSubmit={jest.fn()}
                             handleChange={jest.fn()}
                             user={{username: '', email: '', password: '', password2: ''}}
                             usernameError={null}
                             emailError={null}
                             passwordError={null}
                            />);
    expect(wrapper.find(".Signup___text--error").length).toEqual(0);
    expect(wrapper.find("input.Signup__input--error").length).toEqual(0);
  })
})