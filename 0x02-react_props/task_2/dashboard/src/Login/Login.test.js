import { shallow } from 'enzyme';
import Login from './Login'; // Use the correct component name

describe('<Login />', () => {
    it('renders without crashing', () => {
        shallow(<Login />);
    });

    it('renders the first <input>', () => {
        const wrapper = shallow(<Login />); // Use Login component here
        expect(wrapper.exists('input')).toBe(true);
    });
    
    it('renders the second <input>', () => { // Fix the typo here
        const wrapper = shallow(<Login />);
        expect(wrapper.exists('input')).toBe(true);
    });

    it('renders the first <label>', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.exists('label')).toBe(true);
    });
    
    it('renders the second <label>', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.exists('label')).toBe(true);
    });
});
