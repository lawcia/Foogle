import React from "react";
import Restaurant from "./Restaurant";
import { data } from "../../mockAPIs/zomato";
import renderer from "react-test-renderer";


describe("<Restaurant />", () => {
  it("should match snapshot", () => {
    const tree = renderer.create(<Restaurant res={data.restaurants[0].restaurant}/>, ).toJSON();
    expect(tree).toMatchSnapshot();
  })
})