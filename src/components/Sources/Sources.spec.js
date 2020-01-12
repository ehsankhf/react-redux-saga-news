import React from 'react';
import {shallow} from 'enzyme';

import Sources from './Sources';
import {Container} from '../../shared/Container/Container'

describe('Sources', () => {
    it('should render successfully', () => {
        const component = shallow(<Container><Sources/></Container>).dive();
        expect(component.find('Connect(Sources)').length).toBe(1);
    });
});
