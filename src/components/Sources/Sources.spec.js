import React from 'react';
import {shallow} from 'enzyme';

import Sources from './Sources';

describe('Sources', () => {
    it('should render successfully', () => {
        const component = shallow(<Sources/>);

        expect(component.find('Container').length).toBe(1);
    });
});
