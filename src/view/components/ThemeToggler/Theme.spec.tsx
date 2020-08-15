import React from 'react'
import App from './Theme'
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() })


describe("App", () => {
  describe('component', () => {

    let element: JSX.Element

    beforeEach(() => {
      element = <App />
    });

    it('renders as expected', () => {
      const component = shallow(element);
      expect(component).toMatchSnapshot();
    });

  });
});
