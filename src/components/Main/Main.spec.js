import React from 'react';
import {shallow} from 'enzyme';
import {mount} from 'enzyme';
import {MemoryRouter} from 'react-router';

import Main from './Main';
import {Container} from "../../shared/Container/Container";

describe('Main', () => {
    it('should render successfully', () => {
        const component = shallow(<Main/>);

        expect(component.find('.Main').length).toBe(1);
    });

    it('should render headlines with route /', () => {
        const wrapper = mount(
            <Container>
                <MemoryRouter initialEntries={['/']}>
                    <Main/>
                </MemoryRouter>
            </Container>
        );

        const newsArticles = wrapper.find('NewsArticles');

        expect(newsArticles.length).toBe(1);
        expect(newsArticles.props().type).toBe('head-news');
    });

    it('should render headlines with route /articles', () => {
        const wrapper = mount(
            <Container>
                <MemoryRouter initialEntries={['/articles']}>
                    <Main/>
                </MemoryRouter>
            </Container>
        );

        const newsArticles = wrapper.find('NewsArticles');

        expect(newsArticles.length).toBe(1);
        expect(newsArticles.props().type).toBe(undefined);
    });

    it('should render headlines with route /sources', () => {
        const wrapper = mount(
            <Container>
                <MemoryRouter initialEntries={['/sources']}>
                    <Main/>
                </MemoryRouter>
            </Container>
        );

        const newsArticles = wrapper.find('Sources');

        expect(newsArticles.length).toBe(1);
    });
});
