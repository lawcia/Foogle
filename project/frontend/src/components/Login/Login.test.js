import React from "react";
import  { Login }  from "./Login";
import { mount } from "enzyme";
import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";


describe("<Login />", () => {

  afterEach(() => {
    jest.clearAllMocks();
  })

  it("should have div", () => {
    const wrapper = mount(
                          <MemoryRouter>
                            <Login
                             error={[]} 
                             loginUser={jest.fn()}
                             isAuthenticated={false} 
                             />
                           </MemoryRouter>
                             );
    expect(wrapper.find("div.Login").length).toEqual(1);
  });

  it("should match default snapshot", () => {

    const tree = renderer.create(
      <MemoryRouter>
          <Login
           error={[]} 
           loginUser={jest.fn()}
           isAuthenticated={false} 
           />
      </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should match error snapshot", () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Login
           error={["Something went wrong", "password error"]} 
           loginUser={jest.fn()}
           isAuthenticated={false}
           />
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
