import React from "react";
import { shallow } from "enzyme";
import SearchKeywordInput from "./SearchKeywordInput";

describe("<Search Keyword Input />", () => {

  let wrapper;
  let handleChange = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<SearchKeywordInput 
                      searchKeyword=""
                      handleChange={handleChange}/>)
  })

  it("should render an text input", () => {
    expect(wrapper.find("input[type='text']").length).toEqual(1);
  })

  
  it("onchange of searchKeyword input should call handle change", () => {
    const event = { target: { value: "Sushi" }};
    expect(wrapper.find("input[name='searchKeyword']").props().value).toEqual("");
    
    wrapper.find("input[name='searchKeyword']").simulate("change", event)
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(event);
  })

})