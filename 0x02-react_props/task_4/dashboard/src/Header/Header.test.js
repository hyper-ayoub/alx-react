import { shallow } from 'enzyme';
import Header from './Header';

describe('<Header />', () => {
    it('renders without crashing', () => {
        shallow(<Header />);
    });

    it('renders the logo image', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.exists('logo.png')).toBe(true);
    });
    
    it('renders an <h1> tag', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.exists('h1')).toBe(true);
    });
});
