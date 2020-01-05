import React from 'react';
import {shallow} from 'enzyme';

import Navigation from './Navigation';

describe('Navigation', () => {
    it('should render successfully', () => {
        const component = shallow(<Navigation.WrappedComponent/>);

        expect(component.find('Navbar').length).toBe(1);
    });
});
