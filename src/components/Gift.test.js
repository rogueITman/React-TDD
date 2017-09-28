import React from "react";
import { shallow } from "enzyme";
import Gift from "./components.Gift";

describe('Gift', () => {
  const gift = shallow(<Gift />);

  it('should render', () => {
    expect(gift).toMatchSnapshot();
  })
});