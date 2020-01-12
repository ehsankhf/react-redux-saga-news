import React from 'react';
import {shallow} from 'enzyme';

import Source from './Source';

describe('NewsArticles', () => {
    it('should render successfully', () => {
        const component = shallow(<Source/>);

        expect(component.find('Alert').length).toBe(1);
    });
});
