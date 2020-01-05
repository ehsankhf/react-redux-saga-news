import React from 'react';
import {shallow} from 'enzyme';

import NewsArticles from './NewsArticles';

describe('NewsArticles', () => {
    it('should render successfully', () => {
        const component = shallow(<NewsArticles/>);

        expect(component.find('Container').length).toBe(1);
    });
});
