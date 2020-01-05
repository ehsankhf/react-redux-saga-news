/* eslint-disable import/first */
import api from './api'

describe('api', () => {
    beforeAll(()=>{
        require('jest-fetch-mock').enableMocks();
    });
    beforeEach(()=>{
        fetch.resetMocks();
    });
    afterAll(()=>{
        fetch.disableMocks();
    });
    describe('getArticles', () => {
        it('should call with given key and source', async () => {
            await api.getArticles('abcd');
            expect(fetch.mock.calls[0][0]).toContain('source=abcd');
            expect(fetch.mock.calls[0][0]).toContain('apiKey=TEST_KEY');
        });

        it('should call with given key', async () => {
            await api.getArticles();
            expect(fetch.mock.calls[0][0]).toContain('apiKey=TEST_KEY');
        });
    });

    describe('getSourcesList', () => {
        it('should call with given key', async () => {
            await api.getSourcesList();
            expect(fetch.mock.calls[0][0]).toContain('apiKey=TEST_KEY');
        });
    });

    describe('getHeadlines', () => {
        it('should call with given key', async () => {
            await api.getHeadlines('abcd');
            expect(fetch.mock.calls[0][0]).toContain('apiKey=TEST_KEY');
        });
    });
});
