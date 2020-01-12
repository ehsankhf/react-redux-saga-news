import React from 'react';
import {shallow} from 'enzyme';

import {SourcesList} from './SourcesList';
import {getArticles} from "../../state/actionCreators";

describe('Sources', () => {
    it('should render successfully', () => {
        const component = shallow(<SourcesList/>).dive();
        expect(component.find('.sources-list').length).toBe(1);
    });

    it('should show item All as default', () => {
        const component = shallow(<SourcesList sourcesList={[]}/>);

        expect(component.find('DropdownToggle').html()).toContain('All');
    });

    it('should show selected item', () => {
        const component = shallow(<SourcesList sourcesList={[{name: 'HelloWorld', id: 'HelloWorld'}]}
                                               getArticles={jest.fn()}/>);
        const menu = component.find('DropdownMenu').dive().setProps({show: true});

        menu.find('DropdownItem').get(1).props.onSelect();

        expect(component.find('DropdownToggle').html()).toContain('HelloWorld');
    });

    it('should call if any item is selected', () => {
        const getArticles = jest.fn();
        const component = shallow(<SourcesList sourcesList={[{name: 'HelloWorld', id: 'HelloWorld'}]}
                                               getArticles={getArticles}/>);
        const menu = component.find('DropdownMenu').dive().setProps({show: true});

        menu.find('DropdownItem').get(1).props.onSelect();

        expect(getArticles).toBeCalledTimes(1);
        expect(getArticles).toBeCalledWith('HelloWorld');
    });
});
