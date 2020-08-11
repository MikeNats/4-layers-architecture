import LogIn from '../view/containers/LogIn'
import Routes from './Routes'
import { shallow } from './node_modules/enzyme';
import Enzyme from './node_modules/enzyme';
import Adapter from './node_modules/enzyme-adapter-react-16';
import  { lazy } from './node_modules/react';
const Home = lazy(() => import('../view/containers/home'));

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

    it('should route / unauthenticated  to login', async() => {
      const component = await shallow(element).find('Route[path="/login"]');
      expect(component.prop('component')).toBe(LogIn);
    });

    it('should route /login to LogIn', async () => {
      const component =  await shallow(element).find('PrivateRoute[path="/"]');
      expect(JSON.stringify(component.prop('component'))).toBe((JSON.stringify(Home)));  
    });

    it('should redirect to /', () => {
      expect(shallow(element).find('Redirect[to="/"]')).toBeTruthy()
    });
  });
});