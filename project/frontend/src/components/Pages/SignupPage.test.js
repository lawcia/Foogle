import React from "react";
import { SignupPage } from "./SignupPage";
import { shallow, mount, render } from "enzyme";
import Signup from "../Authentication/Signup/Signup";
import { MemoryRouter } from "react-router-dom";

describe("<SignupPage />", () => {
  it("should contain <Signup /> component", () => {
    const wrapper = shallow(<SignupPage
                             signupUser={jest.fn()}
                             />)
    expect(wrapper.find(Signup).length).toEqual(1);
  })

  it("should show username error", () => {
    const errorMessage = "something went wrong";
    const wrapper = mount(<MemoryRouter>
                           <SignupPage
                           signupUser={jest.fn()}
                           error={{username: errorMessage}}
                           />
                           </MemoryRouter>
                           );
    expect(wrapper.find(".Signup__text--error").length).toEqual(1);
    expect(wrapper.find(".Signup__text--error").text()).toEqual(errorMessage);
  })

  it("should show email error", () => {
    const errorMessage = "something went wrong";
    const wrapper = mount(<MemoryRouter>
                           <SignupPage
                           signupUser={jest.fn()}
                           error={{email: errorMessage}}
                           />
                           </MemoryRouter>
                           );
    expect(wrapper.find(".Signup__text--error").length).toEqual(1);
    expect(wrapper.find(".Signup__text--error").text()).toEqual(errorMessage);
  })

  it("should show password error", () => {
    const errorMessage = "something went wrong";
    const wrapper = mount(<MemoryRouter>
                           <SignupPage
                           signupUser={jest.fn()}
                           error={{password: errorMessage}}
                           />
                           </MemoryRouter>
                           );
    expect(wrapper.find(".Signup__text--error").length).toEqual(1);
    expect(wrapper.find(".Signup__text--error").text()).toEqual(errorMessage);
  })

  it("the text input box should change value", () => {
    const wrapper = mount(<MemoryRouter>
      <SignupPage
      signupUser={jest.fn()}
      />
      </MemoryRouter>
      );
    const username = "myusername";
    expect(wrapper.find("input").at(0).prop("value")).toEqual("");
    wrapper.find("input").at(0).simulate("change", {target: {name: "username", value: username }});
    expect(wrapper.find("input[name='username']").prop("value")).toEqual(username);
  })

  it("should display error message if passwords do not match", () => {
    let wrapper = mount(<MemoryRouter>
      <SignupPage
      signupUser={jest.fn()}
      />
      </MemoryRouter>
      );
    wrapper.find("input[name='password']")
    .simulate("change", {target: {name: "password", value: "12345678910"}});
    wrapper.find("input[name='password2']")
    .simulate("change", {target: {name: "password2", value: "12345678911"}});
    
    wrapper.find("button").simulate("submit");
    wrapper.update();
    expect(wrapper.find(".Signup__text--error").length).toEqual(1);
    expect(wrapper.find(".Signup__text--error").text()).toEqual("Your passwords do not match");
  })

  it("should signup user", () => {
    let signupUser = jest.fn().mockImplementation(() => Promise.resolve("saved"));
    let wrapper = mount(<MemoryRouter>
      <SignupPage
      signupUser={signupUser}
      />
      </MemoryRouter>
      );
    wrapper.find("input[name='username']").simulate("change", {target: { name: "username", value: "user"}});
    wrapper.find("input[name='email']").simulate("change", {target: { name: "email", value: 'user@email.com'}});
    wrapper.find("input[name='password']")
    .simulate("change", {target: {name: "password", value: "123456"}});
    wrapper.find("input[name='password2']")
    .simulate("change", {target: {name: "password2", value: "123456"}});
    
    wrapper.find("button").simulate("submit");
    wrapper.update();
    expect(wrapper.find(".Signup__text--error").length).toEqual(0);
    expect(signupUser).toHaveBeenCalled()
  })
})