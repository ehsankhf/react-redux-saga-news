import React from 'react';
import {shallow} from 'enzyme';

import Main from './Main';

describe('Main', () => {
    beforeEach(()=>{
        global.open.mockRestore()
    });

    describe('When the button is clicked', () => {
        test('should render learn react link', () => {
            const component = shallow(<Main/>);
            const linkElement = component.find('Button');
            linkElement.simulate('click');

            expect(global.open).toHaveBeenCalled();
        });
    });
});
