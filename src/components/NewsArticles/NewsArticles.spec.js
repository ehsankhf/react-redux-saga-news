import React from 'react';
import {shallow, mount} from 'enzyme';

import NewsArticles from './NewsArticles';
import {Container} from '../../shared/Container/Container'

describe('NewsArticles', () => {
    it('should render successfully', () => {
        const component = shallow(<Container><NewsArticles/></Container>).dive();
        expect(component.find('Connect(NewsArticles)').length).toBe(1);
    });
});
