
npm install -g create-react-app  
create-react-app giftgiver  
npm install enzyme jest-cli@20.0.4 --save-dev  
npm install react-bootstrap  
npm install react react-dom --save  
//if projects.map is not a function error | start fresh with following command  
rm -rf node_modules  
//then reinstall node_modules  
npm install  
npm install react-dom react-test-renderer --save-dev  
npm install enzyme-adapter-react-16 --save-dev  

---------------------------------------------------------------------
//WORKING TEST SETUP
import React from "react";
import App from './App';
import { configure, shallow, mount, render } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const app = shallow(<App />);

it('renders correctly', () => {
  expect(app).toMatchSnapshot();
});
------------------------------------------------------------------------------

