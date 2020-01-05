import React from 'react';
import {shallow} from 'enzyme';

import NewsArticle from './NewsArticle';

describe('NewsArticle', () => {
    it('should render successfully', () => {
        const component = shallow(<NewsArticle/>);

        expect(component.find('Container').length).toBe(1);
    });
});
