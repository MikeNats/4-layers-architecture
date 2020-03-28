import LogIn from '../pages/login'
import Routes from '.'
import Home from '../pages/home'
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

    it('should route / unauthenticated  to login', () => {
      const component = shallow(element).find('Route[path="/login"]');
      expect(component.prop('component')).toBe(LogIn);
    });

    it('should route /login to LogIn', () => {
      const component = shallow(element).find('PrivateRoute[path="/"]');
      expect(component.prop('component')).toBe(Home);
    });
    it('should route /login to LogIn', () => {
      const component = shallow(element).find('PrivateRoute[path="/"]');
      expect(component.prop('component')).toBe(Home);
    });
    it('should redirect to /', () => {
      expect(shallow(element).find('Redirect[to="/"]')).toBeTruthy()
    });
  });
});