import reducer from './reducer';

describe('reducer', () => {
    describe('LOADING', () => {
        it('should set loading', () => {
            expect(reducer({test: 1}, {type: 'LOADING'})).toMatchObject({test: 1, loading: true});
        });
    });

    describe('LOADED', () => {
        it('should set loading', () => {
            expect(reducer({test: 1, loading: true}, {type: 'LOADED'})).toMatchObject({test: 1, loading: false});
        });
    });

    describe('RECEIVED_NEWS', () => {
        it('should set articles', () => {
            expect(reducer({test: 1, articles: [{a: 1}]}, {
                type: 'RECEIVED_NEWS',
                articles: [{b: 2, c: 4}]
            })).toMatchObject({test: 1, articles: [{b: 2, c: 4}]});
        });
    });

    describe('RECEIVED_SOURCES', () => {
        it('should set sourcesList', () => {
            expect(reducer({test: 1, sourcesList: [{a: 1}]}, {
                type: 'RECEIVED_SOURCES',
                sourcesList: [{b: 2, c: 4}]
            })).toMatchObject({test: 1, sourcesList: [{b: 2, c: 4}]});
        });
    });
});
