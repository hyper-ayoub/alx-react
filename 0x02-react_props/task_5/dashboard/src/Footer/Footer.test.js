import { shallow } from 'enzyme';
import Footer from './Footer'

describe('<Footer />', () => {
    it('renders without crashing', () => {
        shallow(<Footer />);
    });

    it('renders the the text “Copyright” in <p>', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.exists('p')).toBe(true);
    });
});

