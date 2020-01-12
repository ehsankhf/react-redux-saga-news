import React from 'react';
import {shallow} from 'enzyme';

import {connect} from 'react-redux';
import {Container} from './Container';

describe('Container', () => {
    it('should render the child reduxified component', () => {
        const Simple = () => (<div>SIMPLE</div>);
        const ReduxifiedSimple = connect(null, null)(Simple);
        const component = shallow(<Container><ReduxifiedSimple/></Container>).dive();

        expect(component.find('Connect(Simple)').length).toBe(1);
    });
});
