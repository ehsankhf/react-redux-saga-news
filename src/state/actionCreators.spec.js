import * as actionCreators from './actionCreators';

describe('actionCreators', () => {
    describe('getSources', () => {
        it('should get the action GET_SOURCES', () => {
            expect(actionCreators.getSources()).toMatchObject({type: 'GET_SOURCES', payload: {}})
        });
    });

    describe('getArticles', () => {
        it('should get the action GET_ARTICLES', () => {
            expect(actionCreators.getArticles()).toMatchObject({
                type: 'GET_ARTICLES', payload: {
                    sources: '*'
                }
            });
        });

        it('should get the action GET_ARTICLES', () => {
            expect(actionCreators.getArticles('HEHE')).toMatchObject({
                type: 'GET_ARTICLES', payload: {
                    sources: 'HEHE'
                }
            });
        });
    });

    describe('getHeadlines', () => {
        it('should get the action GET_HEADLINES', () => {
            expect(actionCreators.getHeadlines()).toMatchObject({
                type: 'GET_HEADLINES', payload: {
                    sources: '*'
                }
            })
        });
    });
});
