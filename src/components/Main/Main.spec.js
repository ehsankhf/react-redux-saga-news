import React from 'react';
import {shallow} from 'enzyme';

import Main from './Main';

describe('Main', () => {
    it('should render successfully', ()=>{
        const component = shallow(<Main/>);

        expect(component.find('.Main').length).toBe(1);
    });
});
