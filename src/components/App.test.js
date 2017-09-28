import React from "react";
import App from './App';
import { configure, shallow, mount, render } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const app = shallow(<App />);

it('renders correctly', () => {
  expect(app).toMatchSnapshot();
});

it('initializes the `state` with an empty list of gifts', () => {
  expect(app.state().gifts).toEqual([]);
});

it('adds a new gift to `state` when clicking the `add gift` button', () => {
  app.find('.btn-add').simulate('click');

  expect(app.state().gifts).toEqual([{ id: 1 }]);
});

it('adds a new gift to the rendered list when clicking the `add gift` button', () => {
  app.find('.btn-add').simulate('click');

  const listLength = app.find('.gift-list').children().length;
  expect(listLength).toEqual(2);
});