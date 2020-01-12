/* eslint-disable import/first */
import api from './API'

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
            await expect(api.getArticles('abcd')).rejects.toThrow();
            expect(fetch.mock.calls[0][0]).toContain('sources=abcd');
            expect(fetch.mock.calls[0][0]).toContain('apiKey=TEST_KEY');
        });

        it('should call with given key', async () => {
            await expect(api.getArticles()).rejects.toThrow();
            expect(fetch.mock.calls[0][0]).toContain('apiKey=TEST_KEY');
        });
    });

    describe('getSourcesList', () => {
        it('should call with given key', async () => {
            await expect(api.getSourcesList()).rejects.toThrow();
            expect(fetch.mock.calls[0][0]).toContain('apiKey=TEST_KEY');
        });
    });

    describe('getHeadlines', () => {
        it('should call with given key', async () => {
            await expect(api.getHeadlines('abcd')).rejects.toThrow();
            expect(fetch.mock.calls[0][0]).toContain('apiKey=TEST_KEY');
        });
    });
});
