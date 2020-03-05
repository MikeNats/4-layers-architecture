import LogIn from '../pages/login/LogIn'
import Routes from '.'
import Home from '../pages/home/Home'
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() })


describe("ApRoutes", () => {
  describe('component', () => {

    let element: JSX.Element

    beforeEach(() => {
      element = Routes()
    });

    it('renders as expected', () => {
      const component = shallow(element);
      expect(component).toMatchSnapshot();
    });

    it('route / to Home', () => {
      const component = shallow(element);
      expect(component.find('Route[path="/"]').first().prop('component')).toBe(Home);
    });

    it('route /login to LogIn', () => {
      const component = shallow(element);
      expect(component.find('Route[path="/login"]').first().prop('component')).toBe(LogIn);
    });
  });

});